function solution(n) {
  const isOdd = n % 2 === 1;
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (isOdd && i % 2 === 1) {
      answer += i;
    } else if (!isOdd && i % 2 === 0) {
      answer += i ** 2;
    }
  }

  return answer;
}

// function solution(n) {
//   const oddNums = [];
//   const evenNums = [];

//   for (let i = 1; i <= n; i++) {
//     if (i % 2 === 0) {
//       evenNums.push(i);
//     } else {
//       oddNums.push(i);
//     }
//   }

//   return n % 2 === 0
//     ? evenNums.reduce((acc, cur) => acc + cur ** 2, 0)
//     : oddNums.reduce((acc, cur) => acc + cur, 0);
// }
