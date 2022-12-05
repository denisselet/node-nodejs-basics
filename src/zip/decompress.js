import zlib from "zlib";
import fs from "fs";
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const decompress = async () => {
    const fileContents = fs.createReadStream(__dirname + '/files/archive.gz');
    const writeStream = fs.createWriteStream(__dirname + '/files/fileToCompress.txt');
    const unzip = zlib.createGunzip();
    
    fileContents.pipe(unzip).pipe(writeStream);
};

await decompress();