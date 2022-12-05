import fs from "fs";
import readline from "readline";
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    fs.access(__dirname + "/files/fileToRead.txt", fs.constants.F_OK, (err) => {
        if (err) throw new Error("FS operation failed");
      });
    var rd = readline.createInterface({
        input: fs.createReadStream(__dirname + '/files/fileToRead.txt'),
    });
    
    rd.on('line', function(line) {
        console.log(line);
    });
};

await read();