/*
  - 한 부모에게서 자식은 4개씩 증가
  - 자식 완두콩의 위치를 4로 나눈 나머지는 (0, 1, 2, 3)의 규칙이 반복됨.
  - mod 연산을 위한 인덱스를 맞추기위해 최초 완두콩의 위치 1 감소

  - 내 부모에게서 자신의 위치 = 자신의 위치 % 4
  - 내 부모의 위치 = 자신의 위치 / 4 의 몫

  1. 세대를 거슬러 올라가며 자신의 위치를 스택에 쌓아두고,
  2-1. 한번이라도 'RR', 'rr'을 만나면 'RR', 'rr' 반환
  2-2. 아니라면 'Rr' 반환
*/

function solution(queries) {
  const getBeanParent = (info) => {
    let [generation, position] = info;
    const stack = [];

    position--;

    while (generation > 1) {
      stack.push(position % 4); // 자신의 위치
      position = parseInt(position / 4); // 부모의 위치
      generation--;
    }

    // 스택에 쌓인 형질 체크
    while (stack.length) {
      const current = stack.pop();

      if (current === 0) {
        return 'RR';
      } else if (current === 3) {
        return 'rr';
      }
    }

    return 'Rr';
  };

  return queries.map((query) => getBeanParent(query));
}

console.log(solution([[3, 5]])); //	["RR"]
console.log(
  solution([
    [3, 8],
    [2, 2],
  ])
); // [('rr', 'Rr')];
console.log(
  solution([
    [3, 1],
    [2, 3],
    [3, 9],
  ])
); // [('RR', 'Rr', 'RR')];
console.log(solution([[4, 26]])); // ['Rr'];
