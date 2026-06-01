// Compress JPGs in public/images in place: max 2000px on long edge, mozjpeg q82.
// Run: node scripts/compress-images.mjs
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, extname } from "node:path";
import sharp from "sharp";

const ROOT = "public/images";
const MAX_EDGE = 2000;
const QUALITY = 82;
const MIN_BYTES_TO_PROCESS = 250 * 1024; // skip files already <250KB

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(p);
    else yield p;
  }
}

const fmt = (n) => (n / 1024).toFixed(0) + " KB";

let totalBefore = 0;
let totalAfter = 0;
let processed = 0;
let skipped = 0;

for await (const file of walk(ROOT)) {
  const ext = extname(file).toLowerCase();
  if (ext !== ".jpg" && ext !== ".jpeg") continue;
  const before = (await stat(file)).size;
  if (before < MIN_BYTES_TO_PROCESS) {
    skipped++;
    continue;
  }

  const tmp = file + ".tmp";
  try {
    await sharp(file, { failOn: "none" })
      .rotate()
      .resize({ width: MAX_EDGE, height: MAX_EDGE, fit: "inside", withoutEnlargement: true })
      .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
      .toFile(tmp);

    const after = (await stat(tmp)).size;
    if (after >= before) {
      await unlink(tmp);
      console.log(`= ${file}  ${fmt(before)} (kept original, recompression bigger)`);
      skipped++;
      continue;
    }
    await rename(tmp, file);
    totalBefore += before;
    totalAfter += after;
    processed++;
    console.log(`✓ ${file}  ${fmt(before)} → ${fmt(after)}  (-${Math.round((1 - after / before) * 100)}%)`);
  } catch (err) {
    console.error(`✗ ${file}: ${err.message}`);
    try { await unlink(tmp); } catch {}
  }
}

console.log("");
console.log(`Processed: ${processed} file(s), skipped: ${skipped}`);
console.log(`Total: ${fmt(totalBefore)} → ${fmt(totalAfter)}  (-${totalBefore ? Math.round((1 - totalAfter / totalBefore) * 100) : 0}%)`);
