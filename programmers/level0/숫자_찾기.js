function solution(num, k) {
  return [...num.toString()].indexOf("" + k) + 1 || -1;

  // const answer = [...num.toString()].map(Number).indexOf(k);`
  // return answer !== -1 ? answer + 1 : answer;
}
