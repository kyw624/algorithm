function solution(my_string) {
  return [...new Set(my_string)].join("");

  // const answer = new Set();

  // [...my_string].forEach((v) => answer.add(v));

  // return Array(...answer).join("");
}
