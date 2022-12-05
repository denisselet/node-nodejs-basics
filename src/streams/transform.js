const transform = async () => {
  process.stdin.pipe(process.stdout);
};

await transform();