// num이 짝수인 경우 'Even', 홀수인 경우 'Odd' 반환

function solution(num) {
  return num % 2 ? "Odd" : "Even";
}

console.log(solution(3)); // 'Odd'
console.log(solution(4)); // 'Even'
