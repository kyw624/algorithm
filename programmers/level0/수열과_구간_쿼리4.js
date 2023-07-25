function solution(arr, queries) {
  return queries.reduce(
    (newArr, [s, e, k]) => {
      for (let i = s; i <= e; i++) {
        if (i % k === 0) {
          newArr[i]++;
        }
      }

      return newArr;
    },
    [...arr]
  );
}
