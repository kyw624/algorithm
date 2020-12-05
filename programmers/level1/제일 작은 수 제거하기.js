// 정수 배열 arr에서 가장 작은 수를 제거한 배열을 리턴
//  - arr은 길이 1 이상
//  - 인덱스 i, j에 대해 i != j 이면 arr[i] != arr[j]

function solution(arr) {
  if (arr.length === 1) return [-1];

  let min = Infinity;
  let index = 0;

  arr.forEach((num, idx) => {
    if (min > num) {
      min = num;
      index = idx;
    }
  });

  return [...arr].slice(0, index).concat([...arr].slice(index + 1));
}

console.log(solution([4, 3, 2, 1])); // [4,3,2]
console.log(solution([10])); // [-1]
