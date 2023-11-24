// 2022 카카오 테크 인턴십 기출문제

// 산봉우리까지 편도만 구하면 그대로 되돌아오면 됨.

function solution(n, paths, gates, summits) {
  const intensity = Array(n + 1).fill(Infinity);
  const isSummits = new Set(summits);
  summits.sort((a, b) => a - b);

  const graph = Array.from({ length: n + 1 }, () => []);
  paths.forEach(([a, b, time]) => {
    graph[a].push([b, time]);
    graph[b].push([a, time]);
  });

  const queue = [];
  let queueIndex = 0;
  gates.forEach((gate) => {
    queue.push([gate, 0]);
    intensity[gate] = 0;
  });

  // 다익스트라
  while (queue.length > queueIndex) {
    const [currentNode, currentWeight] = queue[queueIndex++];

    if (isSummits.has(currentNode)) {
      continue;
    }

    for (const [nextNode, nextWeight] of graph[currentNode]) {
      const maxWeight = Math.max(intensity[currentNode], nextWeight); // intensity

      if (maxWeight < intensity[nextNode]) {
        intensity[nextNode] = maxWeight;
        queue.push([nextNode, nextWeight]);
      }
    }
  }

  let result = [undefined, Infinity];

  for (const summit of summits) {
    if (intensity[summit] < result[1]) {
      result = [summit, intensity[summit]];
    }
  }

  return result;
}

const inputs = [
  [
    6,
    [
      [1, 2, 3],
      [2, 3, 5],
      [2, 4, 2],
      [2, 5, 4],
      [3, 4, 4],
      [4, 5, 3],
      [4, 6, 1],
      [5, 6, 1],
    ],
    [1, 3],
    [5],
  ],
  [
    7,
    [
      [1, 4, 4],
      [1, 6, 1],
      [1, 7, 3],
      [2, 5, 2],
      [3, 7, 4],
      [5, 6, 6],
    ],
    [1],
    [2, 3, 4],
  ],
  [
    7,
    [
      [1, 2, 5],
      [1, 4, 1],
      [2, 3, 1],
      [2, 6, 7],
      [4, 5, 1],
      [5, 6, 1],
      [6, 7, 1],
    ],
    [3, 7],
    [1, 5],
  ],
  [
    5,
    [
      [1, 3, 10],
      [1, 4, 20],
      [2, 3, 4],
      [2, 4, 6],
      [3, 5, 20],
      [4, 5, 6],
    ],
    [1, 2],
    [5],
  ],
];
const outputs = [
  [5, 3],
  [3, 4],
  [5, 1],
  [5, 6],
];

inputs.forEach((input, index) => {
  const answer = solution(...input);
  console.log(
    JSON.stringify(answer) === JSON.stringify(outputs[index]),
    answer
  );
});
