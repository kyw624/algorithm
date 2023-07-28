function solution(arr, flag) {
  return arr.reduce(
    (prev, cur, i) =>
      flag[i] ? [...prev, ...Array(cur * 2).fill(cur)] : prev.slice(0, -cur),
    []
  );
  // return arr.reduce((result, cur, i) => {
  //   if (flag[i]) {
  //     return [...result, ...Array(cur * 2).fill(cur)];
  //   } else {
  //     return result.slice(0, -cur);
  //   }
  // }, []);
}
