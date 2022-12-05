const parseEnv = () => {
  const res = process.argv.slice(2);
  for (let i = 0; i < res.length; i += 2) {
    if (String(res[i]).startsWith("RSS_")) {
      console.log(`${res[i]}=${res[i + 1]}`);
    }
  }
};

parseEnv();
