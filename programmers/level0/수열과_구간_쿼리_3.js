// 1. 구조 분해 할당
function solution(arr, queries) {
  const newArr = [...arr];

  for (const [i, j] of queries) {
    [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
  }

  return newArr;
}

// 2. 임시 변수
function solution(arr, queries) {
  const newArr = [...arr];

  for (let i = 0; i < queries.length; i++) {
    const [a, b] = queries[i];

    const tmp = newArr[a];
    newArr[a] = newArr[b];
    newArr[b] = tmp;
  }

  return newArr;
}
