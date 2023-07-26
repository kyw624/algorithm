function solution(start, end) {
  // return Array(start - end + 1).fill().map((_, i) => start - i);
  return Array.from({ length: start - end + 1 }, (_, i) => start - i);
}
