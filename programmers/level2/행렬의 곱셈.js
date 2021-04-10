/*
1. 2차원 행렬 arr1, arr2를 입력받아 곱한 결과를 구하는 문제.

[조건]
  - 행렬 arr1, arr2의 행/열의 길이는 2 이상 100 이하이다.
  - 행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수이다.
  - 곱할 수 있는 배열만 주어진다. 
*/

function solution(arr1, arr2) {
  const result = new Array(arr1.length);

  for (let i = 0; i < result.length; i++) {
    result[i] = new Array(arr2[0].length).fill(0);

    for (let j = 0; j < arr2[0].length; j++) {
      for (let k = 0; k < arr2.length; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
); // [[15, 15], [15, 15], [15, 15]]
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
); // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
