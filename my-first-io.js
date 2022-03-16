const fs = require("fs");

const fileName = process.argv[2];

const data = fs.readFileSync(fileName);

const res = data.toString().split("\n").length - 1;

console.log(res);
