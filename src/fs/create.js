import fs from "fs";
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const create = async () => {
  fs.open(__dirname + "/files/fresh.txt", "r", (err, fd) => {
    if (!err) {
      throw new Error("FS operation failed");
    }
  });
  fs.writeFile(__dirname + "/files/fresh.txt", "I am fresh and young", () => {});
};

await create();
