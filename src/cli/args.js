const parseArgs = () => {
  const res = process.argv.slice(2);
  for (let i = 0; i < res.length; i += 2) {
    console.log(res[i].slice(2) + " is " + res[i + 1]);
  }
};

parseArgs();
