function solution(arr) {
  return arr.reduce((repeatArr, a) => [...repeatArr, ...Array(a).fill(a)], []);
}
