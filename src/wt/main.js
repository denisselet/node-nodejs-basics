import os from "os";
import { Worker, parentPort } from "worker_threads";
import url from "url";
import path from "path";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const performCalculations = async () => {
  const countCPUs = os.cpus().length;
  let arr = [];

  for (let i = 0; i < countCPUs; i++) {
    const promise = new Promise((resolve, reject) => {
      const worker = new Worker(__dirname + "/worker.js", {
        workerData: 10 + i,
      });

      worker.on("message", (message) => {
        resolve({ status: "resolved", data: message.result });
      });
      worker.on("error", () => {
        reject({ status: "rejected", data: null });
      });
    });
    arr.push(promise);
  }

  const result = await Promise.all(arr);
  console.log(result);
};

await performCalculations();
