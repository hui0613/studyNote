const fs = require("fs");
function readFile() {
  return new Promise((resolve, reject) => {
    fs.readFile("../../README.md", (err, data) => {
      if (err) reject(err);
      resolve(data);
    });
  });
}
async function main() {
  let data = await readFile();
  console.log(data.toString());
}

main();
