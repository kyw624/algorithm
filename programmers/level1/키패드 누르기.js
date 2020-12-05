/*
  [2020 카카오 인턴십 문제]
  https://programmers.co.kr/learn/courses/30/lessons/67256
*/

function solution(numbers, hand) {
  const KEYPAD = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    ["*", 0, "#"],
  ];

  let currentIndex = 0;
  let leftIndex = [3, 0];
  let rightIndex = [3, 2];
  let answer = "";

  numbers.forEach((currentValue) => {
    KEYPAD.some((value, index) => {
      if (value.indexOf(currentValue) !== -1) {
        currentIndex = [index, value.indexOf(currentValue)];
        return true;
      }
    });

    if (currentValue === 1 || currentValue === 4 || currentValue === 7) {
      answer += "L";
      leftIndex = currentIndex;
    } else if (currentValue === 3 || currentValue === 6 || currentValue === 9) {
      answer += "R";
      rightIndex = currentIndex;
    } else {
      // 거리 = |x1 - x2| + |y1 - y2|
      const leftDistance =
        Math.abs(leftIndex[0] - currentIndex[0]) +
        Math.abs(leftIndex[1] - currentIndex[1]);
      const rightDistance =
        Math.abs(rightIndex[0] - currentIndex[0]) +
        Math.abs(rightIndex[1] - currentIndex[1]);

      if (leftDistance > rightDistance) {
        answer += "R";
        rightIndex = currentIndex;
      } else if (leftDistance === rightDistance) {
        answer += hand[0].toUpperCase();
        hand === "right"
          ? (rightIndex = currentIndex)
          : (leftIndex = currentIndex);
      } else {
        answer += "L";
        leftIndex = currentIndex;
      }
    }
  });

  return answer;
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right")); // 'LRLLLRLLRRL'
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left")); // 'LRLLRRLLLRR'
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], "right")); // 'LLRLLRLLRL'
