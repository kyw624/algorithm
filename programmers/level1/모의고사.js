/*
[찍는 방식]
  1 >> 1 2 3 4 5
  2 >> 2 1 2 3 2 4 2 5
  3 >> 3 3 1 1 2 2 4 4 5 5

answers: 1번부터의 정답 배열
*/

function solution(answers) {
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const len1 = first.length;
  const len2 = second.length;
  const len3 = third.length;

  const count = [0, 0, 0];
  const result = [];

  for (let i = 0; i < answers.length; i++) {
    if (first[i % len1] === answers[i]) count[0]++;
    if (second[i % len2] === answers[i]) count[1]++;
    if (third[i % len3] === answers[i]) count[2]++;
  }

  const max = Math.max(...count);

  for (let i = 0; i < 3; i++) {
    if (count[i] === max) result.push(i + 1);
  }

  return result;
}

solution([1, 2, 3, 4, 5]);
