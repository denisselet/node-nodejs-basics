import crypto from "crypto";
import fs from "fs";
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const calculateHash = async () => {
  fs.readFile(
    __dirname + "/files/fileToCalculateHashFor.txt",
    "utf8",
    (err, data) => {
      if (err) throw new Error("FS operation failed");
      const hash = crypto.createHash('sha256').update(data).digest('hex');
      console.log(hash);
    }
  );
};

await calculateHash();
