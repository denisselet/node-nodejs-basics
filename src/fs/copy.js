import fs from "fs";
import path from "path";
import { access, constants } from "fs";
import url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const copy = async () => {
  access(__dirname + "/files", constants.F_OK, (err) => {
    if (err) throw new Error("FS operation failed");
  });
  access(__dirname + "/files_copy", constants.F_OK, (err) => {
    if (!err) throw new Error("FS operation failed");
    fs.mkdir(__dirname + "/files_copy", { recursive: true }, (err) => {
      if (err) throw new Error("FS operation failed");
    });
  });
  fs.readdir(__dirname + "/files", (err, files) => {
    files.forEach((file) => {
      fs.copyFile(__dirname + "/files/" + file, __dirname + "/files_copy/" + file, (err) => {
        if (err) throw err;
      });
    });
  });
};

copy();
