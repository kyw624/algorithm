const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString();

let answer = "";

for (const char of input) {
  const upperChar = char.toUpperCase();
  const lowerChar = char.toLowerCase();

  if (char === upperChar) {
    answer += lowerChar;
  } else {
    answer += upperChar;
  }
}

console.log(answer);
