import { NextResponse } from "next/server";
import { addReview, listReviews, parseReviewInput } from "@/lib/reviews";

const WINDOW_MS = 10 * 60_000;
const MAX_HITS = 5;
const hits = new Map<string, { count: number; ts: number }>();

function tooMany(ip: string) {
  const now = Date.now();
  const rec = hits.get(ip);
  if (!rec || now - rec.ts > WINDOW_MS) {
    hits.set(ip, { count: 1, ts: now });
    return false;
  }
  rec.count += 1;
  return rec.count > MAX_HITS;
}

function sameOrigin(request: Request) {
  const origin = request.headers.get("origin");
  const host = request.headers.get("host");
  if (!origin || !host) return true;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function GET() {
  const reviews = await listReviews();
  return NextResponse.json({ reviews });
}

export async function POST(request: Request) {
  if (!sameOrigin(request)) {
    return NextResponse.json({ ok: false, error: "origin" }, { status: 403 });
  }

  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "local";
  if (tooMany(ip)) {
    return NextResponse.json({ ok: false, error: "rate" }, { status: 429 });
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "json" }, { status: 400 });
  }

  const parsed = parseReviewInput(body);
  if (!parsed.ok) {
    if (parsed.error === "bot") return NextResponse.json({ ok: true });
    return NextResponse.json({ ok: false, error: parsed.error }, { status: 400 });
  }

  const review = await addReview(parsed);
  if (review === "full") {
    return NextResponse.json({ ok: false, error: "full" }, { status: 503 });
  }
  return NextResponse.json({ ok: true, review });
}
