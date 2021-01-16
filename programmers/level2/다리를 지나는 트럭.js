/*
1. 트럭 여러 대가 다리를 정해진 순서로 1초에 1만큼씩 움직여 건너려 한다.
2. 파라미터
  - bridge_length: 다리 길이
  - weight: 다리가 견딜 수 있는 최대 무게 (트럭이 완전히 오르지 않으면 해당 무게 측정 X)
  - truck_weights: 트럭별 무게

[조건]
  - 1 <= bridge_length <= 10,000
  - 1 <= weight <= 10,000
  - 1 <= truck_weight.length <= 10,000
  - 1 <= truck_weight <= weight

[출력]
  - 모든 트럭이 건너는데 걸리는 시간 반환
*/

function solution(bridge_length, weight, truck_weights) {
  const truckList = [...truck_weights];
  const bridge = new Array(bridge_length).fill(0); // 현재 다리의 상태
  let weightSum = 0; // 현재 다리의 무게
  let current; // bridge[0]을 담을 변수
  let time = 0;

  while (bridge.length > 0) {
    current = bridge.shift();

    // current가 0이 아닌 트럭이라면 누적된 다리 무게에서 빼준다.
    if (current !== 0) weightSum -= current;

    if (truckList.length !== 0) {
      if (weight >= weightSum + truckList[0]) {
        weightSum += truckList[0];
        bridge.push(truckList.shift());
      } else {
        bridge.push(0);
      }
    }

    time++;
  }

  return time;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
