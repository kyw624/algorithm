function solution(n) {
  return ("" + n).split(/0|/).reduce((total, num) => total + +num, 0);
}
