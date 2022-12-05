import fs from 'fs';
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const read = async () => {
    const stream = fs.createReadStream(__dirname + '/files/fileToRead.txt');
    for await (const chunk of stream) {
        process.stdout.write(chunk + '\n');
    }
};

await read();