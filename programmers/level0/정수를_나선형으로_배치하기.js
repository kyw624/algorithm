function solution(n) {
  const board = Array.from({ length: n }, () => Array(n).fill(0));
  let row = -1;
  let col = -1;
  let num = 1;

  const fillNumber = (direction, length) => {
    for (let i = 0; i < length - 1; i++) {
      board[row][col] = num++;

      switch (direction) {
        case "RIGHT":
          col++;
          break;

        case "DOWN":
          row++;
          break;

        case "LEFT":
          col--;
          break;

        case "UP":
          row--;
          break;
      }
    }
  };

  for (let step = n; step > 0; step -= 2) {
    row++;
    col++;

    fillNumber("RIGHT", step);
    fillNumber("DOWN", step);
    fillNumber("LEFT", step);
    fillNumber("UP", step);
  }

  if (n % 2 !== 0) board[row][col] = num; // n이 홀수일 때 마지막 남는 칸 채우기

  return board;
}
