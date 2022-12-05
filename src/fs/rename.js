import fs from "fs";
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rename = async () => {
  fs.rename(__dirname + "/files/wrongFilename.txt", __dirname + "/files/properFilename.md", (err) => {
    if (err) throw new Error("FS operation failed");
  });
};

await rename();
