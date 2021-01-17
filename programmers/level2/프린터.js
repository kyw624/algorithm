/*
1. 인쇄 대기목록 가장 앞에 있는 문서(J)를 대기목록에서 꺼낸다.
2. 나머지 대기목록에서 J보다 중요도가 높은 문서가 있다면 J를 대기목록 마지막에 넣는다.
3. 그렇지 않으면 J를 인쇄한다.
    ex) 4개의 문서 (A, B, C, D) / 중요도 (2, 1, 3, 2)
        >> C D A B 순으로 인쇄
4. 파라미터
  - priorities: 문서의 중요도가 담긴 배열
  - location: 내가 요청한 문서의 현재 위치 (맨 앞이 0)

[조건]
  - 1 <= 대기목록의 문서 개수 <= 100
  - 중요도는 1~9로 표현하며 클수록 중요함.
  - 0 <= location <= (현재 대기목록의 작업 수 - 1)

[출력]
  - 인쇄를 요청한 문서(location) 가 몇 번째로 인쇄되는지 반환.
*/

function solution(priorities, location) {
  const queue = [...priorities];
  let count = 0;
  let target = location;

  while (queue.length > 0) {
    const current = queue.shift();
    let check = false;

    for (let i = 0; i < queue.length; i++) {
      if (current < queue[i]) {
        check = true;
        break;
      }
    }

    if (check) {
      queue.push(current);
    } else {
      count++;

      if (target === 0) break;
    }

    if (--target < 0) target = queue.length - 1;
  }

  return count;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
