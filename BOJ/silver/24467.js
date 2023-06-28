// 24467 - 혼자 하는 윷놀이

const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.replace("\r", ""));

//
// 4개의 루트 (거리 긴 순으로)
// 0: 갈림길 X
// 1: 두번째 갈림길
// 2: 첫번째 갈림길
// 3: 첫번째 갈림길 + 추가 갈림길
let route = 0;
let distance = [21, 17, 17, 12]; // 루트별 goal까지의 거리
let index = 0;
let count = 0;

while (count < 10) {
  const current = check(input[count]);

  index += current;

  // 1번 루트
  if (route === 0) {
    if (index === 5) {
      // 첫번째 갈림길
      route = 2;
    } else if (index === 10) {
      // 두번째 갈림길
      route = 1;
    }
    // 2번 루트
  } else if (route === 2) {
    if (index === 8) {
      // 추가 갈림길
      route = 3;
    }
  }

  count++;
}

if (index < distance[route]) {
  console.log("LOSE");
} else {
  console.log("WIN");
}

function check(sticks) {
  let result = 0;

  for (const stick of sticks) {
    if (stick === "0") {
      result++;
    }
  }

  return result === 0 ? 5 : result;
}
