/*
1. N개의 마을로 이루어진 나라가 있다.
2. 각 마을에는 1부터 N까지의 번호가 붙어있다.
3. 각 마을은 양방향 통행이 가능한 도로로 연결되어있다.
4. 서로 다른 마을 간 이동 시에는 이 도로를 지나야 한다.
5. 도로마다 걸리는 시간은 다르다.
6. 1번 마을의 음식점에서 각 마을로 음식 배달 주문을 받는데 (1번 마을도 포함)
   N개의 마을 중에서 K시간 이하로 배달이 가능한 마을만 주문을 받는다.
7. 파라미터
  - N: 마을의 개수
  - road: 각 마을을 연결하는 도로의 정보
  - K: 음식 배달이 가능한 시간

[조건]
  - 1 <= N <= 50 (N은 자연수)
  - 1 <= road.length <= 2,000
  - road의 각 원소는 마을을 연결하고 있는 각 도로의 정보를 나타낸다.
  - road는 길이가 3인 배열이며, 순서대로 (a, b, c)를 나타낸다.
    >> a, b (1 <= a, b <= N, a != b)는 도로가 연결하는 두 마을의 번호.
    >> c (1 <= c <= 10,000, c는 자연수)는 도로를 지나는데 걸리는 시간.
  - 1 <= K <= 500,000
  - 임의의 두 마을간에 항상 이동 가능한 경로가 존재한다.

[출력]
  - 1번 마을에 있는 음식점이 K 이하의 시간에 배달이 가능한 마을의 개수를 리턴.
*/

function solution(N, road, K) {
  const graph = Array.from({ length: N + 1 }, () => []);
  const distance = new Array(N + 1).fill("Infinity");
  const visited = new Array(N + 1).fill(false);

  road.forEach((arr) => {
    const start = arr[0];
    const end = arr[1];
    const dist = arr[2];

    graph[start].push([end, dist]);
    graph[end].push([start, dist]);
  });

  let current = 1;
  let target;
  let min;
  distance[1] = 0;

  while (true) {
    for (let i = 0; i < graph[current].length; i++) {
      target = graph[current][i][0];

      if (
        !visited[target] &&
        distance[current] + graph[current][i][1] < distance[target]
      ) {
        distance[target] = distance[current] + graph[current][i][1];
      }
    }

    visited[current] = true;
    min = "Infinity";

    for (let i = 1; i <= N; i++) {
      if (!visited[i] && min > distance[i]) {
        min = distance[i];
        current = i;
      }
    }

    if (visited.lastIndexOf(false) === 0) break;
  }

  return distance.filter((val) => val <= K).length;
}

console.log(
  solution(
    5,
    [
      [1, 2, 1],
      [2, 3, 3],
      [5, 2, 2],
      [1, 4, 2],
      [5, 3, 1],
      [5, 4, 2],
    ],
    3
  )
); // 4

console.log(
  solution(
    6,
    [
      [1, 2, 1],
      [1, 3, 2],
      [2, 3, 2],
      [3, 4, 3],
      [3, 5, 2],
      [3, 5, 3],
      [5, 6, 1],
    ],
    4
  )
); // 4
