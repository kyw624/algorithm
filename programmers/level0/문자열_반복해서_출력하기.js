const fs = require("fs");
const [str, n] = fs.readFileSync("/dev/stdin").toString().split(" ");

console.log(str.repeat(n));
