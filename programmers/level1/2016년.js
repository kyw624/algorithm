/*
  # 2016년 a월 b일의 요일 구하기
    - 1월 1일은 금요일.
    - 시작 요일은 일요일. [SUN, MON, TUE, WED, THU, FRI, SAT]
    - 2016년은 윤년. (2월 29일까지)

  >> ((날짜 % 7) + 4) % 7 = 배열 번호
*/

function solution(a, b) {
  const MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const WEEK = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let count = b;

  // a 전월까지 날짜 누적
  for (let i = 0; i < a - 1; i++) {
    count += MONTH[i];
  }

  return WEEK[((count % 7) + 4) % 7];
}

solution(5, 24); // "TUE"
