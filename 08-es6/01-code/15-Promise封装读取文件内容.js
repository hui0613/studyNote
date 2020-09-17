const fs = require("fs");
const p = new Promise(function (resolve, reject) {
  fs.readFile("../../README.md", function (err, data) {
    if (err) {
      reject(err);
    }
    resolve(data.toString());
  });
});

p.then(
  function (value) {
    console.log(value);
  },
  function (reason) {
    console.log(reason);
  }
);
