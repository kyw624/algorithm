/*
1. 둥글게 앉아서 한명씩 숫자를 차례대로 말하는 게임이다.
2. 규칙
  1) 숫자를 0부터 9까지 차례대로 말한다. 첫 번째 사람은 0, 두 번째 사람은 1, ....
  2) 10 이상부터는 한 자리씩 끊어서 말한다.
    ex) 10일 때, 1을 말하면 다음 사람이 0을 말한다.
3. 이 게임을 2진법부터 16진법까지 모든 진법으로 진행할 수 있다.
4. 튜브(p)가 말해야 하는 숫자를 출력해야 한다.
5. 파라미터
  - n: 진법
  - t: 미리 구할 숫자의 개수
  - m: 게임 참가 인원
  - p: 튜브의 순서

[조건]
  - 2 <= n <= 16
  - 0 < t <= 1,000
  - 2 <= m <= 100
  - 1 <= p <= m

[출력]
  - 튜브가 말해야 하는 숫자 t개를 공백 없이 차례대로 나타낸 문자열을 리턴.
    (10 ~ 15 는 대문자 A~F로 출력한다.)
*/

/*
  - n: 진법
  - t: 미리 구할 숫자의 개수
  - m: 게임 참가 인원
  - p: 튜브의 순서
*/

function solution(n, t, m, p) {
  let store = [];
  let i = 0;
  let num = 0;
  let answer = "";

  while (answer.length < t) {
    if (store.length === 0) {
      store = num.toString(n).toUpperCase().split("");
      num++;
    }

    const currentNum = store.shift();

    if ((i % m) + 1 === p) {
      answer += currentNum;
    }

    i++;
  }

  return answer;
}

console.log(solution(2, 4, 2, 1)); // "0111"
console.log(solution(16, 16, 2, 1)); // "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // "13579BDF01234567"
