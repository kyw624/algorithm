function solution(rank, attendance) {
  return rank
    .map((_, i) => i)
    .filter((v) => attendance[v])
    .sort((a, b) => rank[a] - rank[b])
    .slice(0, 3)
    .reduce((acc, cur, i) => acc * 100 + cur, 0);

  // return rank
  //   .filter((_, i) => attendance[i])
  //   .sort((a, b) => a - b)
  //   .map((v) => rank.indexOf(v))
  //   .slice(0, 3)
  //   .reduce((acc, cur, i) => acc + 100 ** (2 - i) * cur, 0);
}
