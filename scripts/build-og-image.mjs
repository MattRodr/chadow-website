// Build a 1200×630 OG card from a source photo. Run: node scripts/build-og-image.mjs
import sharp from "sharp";

const SRC = "public/images/home/choses-sauvages-club-soda-2025.jpg";
const OUT = "public/og-image.jpg";

await sharp(SRC)
  .resize({ width: 1200, height: 630, fit: "cover", position: "attention" })
  .jpeg({ quality: 82, mozjpeg: true, progressive: true })
  .toFile(OUT);

console.log("Built", OUT);
