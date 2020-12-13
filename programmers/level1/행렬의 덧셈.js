/*
[조건]
  - arr1, arr2의 행과 열의 길이는 500 이하.

[출력]
  행렬 arr1, arr2의 행렬 덧셈 결과를 반환.
*/

function solution(arr1, arr2) {
  const answer = [];

  for (let i = 0; i < arr1.length; i++) {
    answer.push([]);
    for (let j = 0; j < arr1[0].length; j++) {
      answer[i][j] = arr1[i][j] + arr2[i][j];
    }
  }

  return answer;
}

console.log(
  solution(
    [
      [1, 2],
      [2, 3],
    ],
    [
      [3, 4],
      [5, 6],
    ]
  )
); // [[4, 6], [7, 9]]
console.log(solution([[1], [2]], [[3], [4]])); // [[4], [6]]
