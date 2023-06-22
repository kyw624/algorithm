// 16926 - 배열 돌리기 1

const [n, m, r, ...input] = require("fs")
  .readFileSync("./input.txt")
  .toString()
  .trim()
  .split(/\s/)
  .filter((v) => v != "")
  .map((v) => +v);

const arr = [];
input.forEach((v, i) => {
  if (i % m === 0) {
    arr.push(input.slice(i, i + m));
  }
});

solution(n, m, r, arr); // answer

function solution(n, m, r, matrix) {
  // r번 돌리지말고 각 사이클마다 배열 체인을 만들어서 한번에 이동 후 다시 2차원으로
  for (let i = 0; i < Math.min(n, m) / 2; i++) {
    rotate(i, n - 2 * i, m - 2 * i, r, matrix); // 다음 줄로 넘어가면 양쪽 1칸씩, 총 2칸 줄어들기때문
  }

  for (let i = 0; i < matrix.length; i++) {
    console.log(matrix[i].join(" "));
  }
}

function rotate(count, n, m, r, matrix) {
  const chain = getChain(count, n, m, matrix);
  const position = chain.length - (r % chain.length);
  const rotated = chain.slice(position).concat(chain.slice(0, position));

  putChain(rotated, count, n, m, matrix);
}

function getChain(count, n, m, matrix) {
  const chain = Array((n - 1 + m - 1) * 2);
  let row = count;
  let col = count;
  let index = 0;

  for (let i = 0; i < n - 1; i++) {
    chain[index] = matrix[row][col];
    row++;
    index++;
  }
  for (let i = 0; i < m - 1; i++) {
    chain[index] = matrix[row][col];
    col++;
    index++;
  }
  for (let i = 0; i < n - 1; i++) {
    chain[index] = matrix[row][col];
    row--;
    index++;
  }
  for (let i = 0; i < m - 1; i++) {
    chain[index] = matrix[row][col];
    col--;
    index++;
  }

  return chain;
}

function putChain(chain, count, n, m, matrix) {
  let row = count;
  let col = count;
  let index = 0;

  for (let i = 0; i < n - 1; i++) {
    matrix[row][col] = chain[index];
    row++;
    index++;
  }
  for (let i = 0; i < m - 1; i++) {
    matrix[row][col] = chain[index];
    col++;
    index++;
  }
  for (let i = 0; i < n - 1; i++) {
    matrix[row][col] = chain[index];
    row--;
    index++;
  }
  for (let i = 0; i < m - 1; i++) {
    matrix[row][col] = chain[index];
    col--;
    index++;
  }
}
