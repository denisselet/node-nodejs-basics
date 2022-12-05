import fs from "fs";
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const write = async () => {
  const stream = fs.createWriteStream(__dirname + "/files/fileToWrite.txt");
  process.stdin.pipe(stream);
};

await write();
