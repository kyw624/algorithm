function solution(arr, intervals) {
  // return [].concat(...intervals.map(([a, b]) => arr.slice(a, b + 1)));
  return intervals.reduce(
    (res, [a, b]) => [...res, ...arr.slice(a, b + 1)],
    []
  );
}
