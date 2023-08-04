function solution(s) {
  const alphabets = {};

  for (const char of s) {
    if (alphabets.hasOwnProperty(char)) {
      alphabets[char]++;
    } else {
      alphabets[char] = 1;
    }
  }

  return Object.keys(alphabets)
    .filter((key) => alphabets[key] === 1)
    .sort()
    .join("");
}
