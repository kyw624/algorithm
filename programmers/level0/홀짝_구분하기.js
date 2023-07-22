const fs = require("fs");
const input = Number(fs.readFileSync("/dev/stdin").toString());

console.log(input % 2 === 0 ? `${input} is even` : `${input} is odd`);
