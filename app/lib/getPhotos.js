import fs from "fs";
import path from "path";

const PHOTOS_DIR = path.join(process.cwd(), "public", "Photos");
const IMAGE_EXTENSIONS = /\.(jpe?g|png|gif|webp|avif)$/i;

export function getPhotos() {
  return fs
    .readdirSync(PHOTOS_DIR)
    .filter((file) => IMAGE_EXTENSIONS.test(file))
    .sort()
    .map((file) => `/Photos/${file}`);
}
