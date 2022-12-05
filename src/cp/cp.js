import { fork } from "child_process";
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const spawnChildProcess = async (args) => {
  const child = fork(__dirname + "/files/script.js", args);

  child.on("message", (message) => {
    console.log(`Received from child process: ${message}`);
  });
};

spawnChildProcess(["a", "b", "c"]);
