function solution(num, total) {
  const mid = Math.ceil(total / num); // 중간값
  const start = mid - Math.floor(num / 2); // 시작값

  return Array.from({ length: num }, (_, i) => start + i);
}
