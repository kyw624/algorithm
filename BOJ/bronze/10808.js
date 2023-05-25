const input = require("fs").readFileSync("./input.txt").toString().trim();
const alphabet = {};

for (let i = 97; i < 123; i++) {
  alphabet[String.fromCharCode(i)] = 0;
}

for (let char of input) {
  if (alphabet.hasOwnProperty(char)) {
    alphabet[char]++;
  }
}

const result = Object.values(alphabet);

console.log(result.join(" "));
