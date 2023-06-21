function solution(n) {
  const answer = [];

  hanoi(n, 1, 3, 2);

  function hanoi(num, start, to, other) {
    if (num === 1) {
      answer.push([start, to]);
    } else {
      hanoi(num - 1, start, other, to);
      answer.push([start, to]);
      hanoi(num - 1, other, to, start);
    }
  }

  return answer;
}

console.log(solution(2)); // [ [1,2], [1,3], [2,3] ]
