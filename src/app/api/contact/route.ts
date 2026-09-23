import { NextResponse } from "next/server";

const WINDOW_MS = 60_000;
const MAX_HITS = 8;
const hits = new Map<string, { count: number; ts: number }>();
const TYPES = new Set(["web", "mobile", "software"]);
const INBOXES = ["ademyacef@gmail.com", "yacefadem03@gmail.com"] as const;

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

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function readString(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

async function deliverMail(payload: {
  name: string;
  email: string;
  projectType: string;
  message: string;
}) {
  const body = {
    name: payload.name,
    email: payload.email,
    message: payload.message,
    projectType: payload.projectType,
    _replyto: payload.email,
    _subject: `Portfolio — ${payload.name}`,
    _template: "box",
    _cc: INBOXES[1],
  };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 9000);
  try {
    const res = await fetch(`https://formsubmit.co/ajax/${INBOXES[0]}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(body),
      signal: controller.signal,
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

export async function POST(request: Request) {
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

  if (!body || typeof body !== "object") {
    return NextResponse.json({ ok: false, error: "body" }, { status: 400 });
  }

  const payload = body as Record<string, unknown>;
  if (readString(payload.fax_number).length > 0) {
    return NextResponse.json({ ok: true });
  }

  const name = readString(payload.name);
  const email = readString(payload.email);
  const message = readString(payload.message);
  const projectType = readString(payload.projectType);

  if (name.length < 2 || name.length > 80) {
    return NextResponse.json({ ok: false, error: "name" }, { status: 400 });
  }
  if (!isEmail(email) || email.length > 120) {
    return NextResponse.json({ ok: false, error: "email" }, { status: 400 });
  }
  if (message.length < 5 || message.length > 2000) {
    return NextResponse.json({ ok: false, error: "message" }, { status: 400 });
  }
  if (!TYPES.has(projectType)) {
    return NextResponse.json({ ok: false, error: "type" }, { status: 400 });
  }

  const mailed = await deliverMail({ name, email, projectType, message });
  return NextResponse.json({ ok: true, mailed });
}
