// 자연수 n의 각 자릿수의 합을 리턴

function solution(n) {
  return (n + "").split("").reduce((acc, cur) => acc + parseInt(cur), 0);
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24
