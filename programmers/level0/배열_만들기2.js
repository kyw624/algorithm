function solution(l, r) {
  const arr = Array.from({ length: 64 }, (_, i) => i + 1).map(
    (v) => v.toString(2) * 5
  );
  const result = arr.filter((v) => v >= l && v <= r);

  return result.length ? result : [-1];
}
