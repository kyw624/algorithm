function solution(arr) {
  const firstIndex = arr.indexOf(2);
  const lastIndex = arr.lastIndexOf(2);
  const answer = arr.slice(firstIndex, lastIndex + 1);

  return answer.length ? answer : [-1];
}
