import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import type { Review } from "@/lib/review-types";

export type { Review };

const FILE = path.join(process.cwd(), "data", "reviews.json");
const MAX_REVIEWS = 80;

let cache: Review[] | null = null;

function clean(value: string, max: number) {
  return value.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, max);
}

export function parseReviewInput(body: unknown):
  | { ok: true; name: string; project: string; comment: string }
  | { ok: false; error: string } {
  if (!body || typeof body !== "object") return { ok: false, error: "body" };
  const payload = body as Record<string, unknown>;
  if (typeof payload.fax_number === "string" && payload.fax_number.length > 0) {
    return { ok: false, error: "bot" };
  }
  const name = clean(typeof payload.name === "string" ? payload.name : "", 80);
  const project = clean(typeof payload.project === "string" ? payload.project : "", 80);
  const comment = clean(typeof payload.comment === "string" ? payload.comment : "", 500);
  if (name.length < 2) return { ok: false, error: "name" };
  if (project.length < 2) return { ok: false, error: "project" };
  if (comment.length < 8) return { ok: false, error: "comment" };
  return { ok: true, name, project, comment };
}

async function load(): Promise<Review[]> {
  if (cache) return cache;
  try {
    const raw = await readFile(FILE, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) {
      cache = [];
      return cache;
    }
    cache = parsed.filter((item): item is Review => {
      if (!item || typeof item !== "object") return false;
      const row = item as Record<string, unknown>;
      if (typeof row.id === "string" && row.id.startsWith("seed-")) return false;
      return (
        typeof row.id === "string" &&
        typeof row.name === "string" &&
        typeof row.project === "string" &&
        typeof row.comment === "string" &&
        typeof row.createdAt === "string"
      );
    });
    return cache;
  } catch {
    cache = [];
    return cache;
  }
}

async function persist(list: Review[]) {
  cache = list;
  try {
    await mkdir(path.dirname(FILE), { recursive: true });
    await writeFile(FILE, `${JSON.stringify(list, null, 2)}\n`, "utf8");
  } catch {
    /* serverless / read-only fs: keep in-memory for this instance */
  }
}

export async function listReviews(): Promise<Review[]> {
  const list = await load();
  return [...list].sort((a, b) => b.createdAt.localeCompare(a.createdAt));
}

export async function addReview(input: { name: string; project: string; comment: string }): Promise<Review | "full"> {
  const list = await load();
  if (list.length >= MAX_REVIEWS) return "full";
  const review: Review = {
    id: crypto.randomUUID(),
    name: input.name,
    project: input.project,
    comment: input.comment,
    createdAt: new Date().toISOString(),
  };
  await persist([review, ...list]);
  return review;
}
