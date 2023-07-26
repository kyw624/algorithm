function solution(arr, idx) {
  // return arr.indexOf(1, idx);
  let answer = -1;

  for (let i = idx; i < arr.length; i++) {
    if (arr[i] === 1) return i;
  }

  return answer;
}
