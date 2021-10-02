/*
1. 놀이기구의 원래 이용료는 price원인데, N번 째 이용한다면 N배의 이용료를 받기로 했다.
2. 처음 이용료가 100원이라면 2번째는 200원, 3번째는 300원...
3. count번 타게 된다면 현재 가지고 있는 금액에서 모자란 금액을 구하는 문제.

[조건]
  - 이용료: 1 <= price <= 2,500
  - 가진 금액: 1 <= money <= 1,000,000,000 
  - 이용 횟수: 1 <= count <= 2,500
  - price, money, count는 자연수.

[출력]
  - price원의 놀이기구를 count번 탈 때 모자란 금액을 return.
*/

function solution(price, money, count) {
  let total = 0;

  for (let i = 1; i <= count; i++) {
    total += price * i;
  }

  return money - total < 0 ? total - money : 0;
}

console.log(solution(3, 20, 4)); // 10
