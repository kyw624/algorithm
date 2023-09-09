function solution(command) {
  // | 0: 상 | 1: 우 | 2: 하 | 3: 좌 |
  const move = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const coordinate = [0, 0];
  let direction = 0; // 최초 위쪽 바라봄.

  [...command].forEach((cmd) => {
    if (cmd === 'G') {
      coordinate[0] += move[direction][0];
      coordinate[1] += move[direction][1];
    } else if (cmd === 'B') {
      coordinate[0] -= move[direction][0];
      coordinate[1] -= move[direction][1];
    } else if (cmd === 'L') {
      direction = (direction + 3) % 4;
    } else if (cmd === 'R') {
      direction = (direction + 1) % 4;
    }
  });

  return coordinate;
}

console.log(solution('GRGLGRG')); // [2, 2]
console.log(solution('GRGRGRB')); // [2, 0]
