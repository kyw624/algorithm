function solution(arr, queries) {
  const answer = [];

  queries.forEach((query) => {
    const [s, e, k] = query;
    const candidates = [];
    const target = arr.slice(s, e + 1);

    target.forEach((v) => {
      if (v > k) {
        candidates.push(v);
      } else {
        return false;
      }
    });

    const result = candidates.length === 0 ? -1 : Math.min(...candidates);
    answer.push(result);
  });

  return answer;
}
