/*
  commands: [current, j, k] 로 이루어진 2차원 배열

  array의 i번째부터 j번째까지 자른 배열을 정렬한 후 k번째 숫자
*/

/*
  1 <= array.length <= 100
  1 <= element <= 100
  1 <= command.length <= 50
*/

function solution(array, commands) {
  const result = [];

  for (let current = 0; current < commands.length; current++) {
    const i = commands[current][0];
    const j = commands[current][1];
    const k = commands[current][2];
    const tmp = array
      .filter((value, index) => {
        if (index >= i - 1 && index < j) return value;
      })
      .sort((a, b) => a - b);

    result.push(tmp[k - 1]);
  }

  return result;
}

solution(
  [1, 5, 2, 6, 3, 7, 4],
  [
    [2, 5, 3],
    [4, 4, 1],
    [1, 7, 3],
  ]
);
