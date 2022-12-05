import zlib from "zlib";
import fs from "fs";
import { pipeline } from "stream";
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compress = async () => {
  const gzip = zlib.createGzip();
  const source = fs.createReadStream(__dirname + "/files/fileToCompress.txt");
  const destination = fs.createWriteStream(__dirname + "/files/archive.gz");

  pipeline(source, gzip, destination, (err) => {
    if (err) {
      console.error("An error occurred:", err);
      process.exitCode = 1;
    }
  });
};

await compress();
