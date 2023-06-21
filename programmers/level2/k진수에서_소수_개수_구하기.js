function solution(n, k) {
  let result = 0;
  const convertNumber = n
    .toString(k)
    .split("0")
    .map((v) => +v);

  return convertNumber.reduce((acc, cur) => {
    if (isPrime(cur)) {
      return acc + 1;
    }

    return acc;
  }, 0);
}

// function solution(n, k) {
//   let result = 0;

//   // 1. 진법 변환
//   const convertNumber = n.toString(k);

//   // 2. 소수 판별 (중간에 0 있으면 안됨)
//   const primeNumbers = []; // [[primeNumber, startIndex]] 형태
//   let temp = "";
//   let start = 0;

//   for (let i = 0; i < convertNumber.length; i++) {
//     const current = convertNumber[i];

//     if (current !== "0") {
//       temp += current;
//     } else if (current === "0") {
//       if (temp !== "") {
//         if (isPrime(temp)) {
//           primeNumbers.push([temp, start]);
//         }
//       }

//       temp = "";
//       start = i + 1;
//     }

//     if (i === convertNumber.length - 1 && temp !== "") {
//       if (isPrime(temp)) {
//         primeNumbers.push([temp, start]);
//       }
//     }
//   }

//   // 3. 찾은 소수 별 인덱스로 케이스 확인
//   primeNumbers.forEach((prime) => {
//     const [num, start] = prime;
//     const end = start + num.length - 1;

//     if (convertNumber[start - 1] === "0" && convertNumber[end + 1] === "0") {
//       // 3-1. 소수 양쪽에 0
//       result++;
//     } else if (
//       convertNumber[start - 1] == null &&
//       convertNumber[end + 1] === "0"
//     ) {
//       // 3-2. 소수 오른쪽에 0, 왼쪽 막힘
//       result++;
//     } else if (
//       convertNumber[start - 1] === "0" &&
//       convertNumber[end + 1] == null
//     ) {
//       // 3-3. 소수 왼쪽에 0, 오른쪽 막힘
//       result++;
//     } else if (
//       // 3-4. 소수 양쪽에 아무것도 없음
//       convertNumber[start - 1] == null &&
//       convertNumber[end + 1] == null
//     ) {
//       result++;
//     }
//   });

//   return result;
// }

function isPrime(n) {
  if (n <= 1) return false;

  const modNums = [];

  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      modNums.push(i);
    }

    if (modNums.length > 1) {
      return false;
    }
  }

  return true;
}

console.log(solution(437674, 3)); // 3
console.log(solution(110011, 10)); // 2
