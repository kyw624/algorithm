function solution(my_string) {
  return [...my_string.toLowerCase()].sort().join("");
  // return my_string.toLowerCase().split("").sort().join("");
}
