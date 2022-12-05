import fs from "fs";
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const remove = async () => {
  fs.unlink(__dirname + "/files/fileToRemove.txt", (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await remove();
