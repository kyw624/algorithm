function solution(num_str) {
  return num_str.split(/0|/).reduce((acc, cur) => acc + +cur, 0);
}
