import fs from "fs";
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const list = async () => {
  fs.readdir(__dirname + "/files", (err, files) => {
    files.forEach((file) => {
      console.log(file);
    });
  });
};

await list();
