/*
1. LZW (Lemple-Ziv-Welch) 압축 알고리즘을 구현.
  1) 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
  2) 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
  3) w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
  4) 입력에서 처리되지 않은 다음 글자가 남아있다면 (c), w+c에 해당하는 단어를 사전에 등록한다.
  5) 단계 2로 돌아간다.

[조건]
  - msg는 대문자로만 이루어져있다.
  - msg의 길이는 1 이상, 1,000 이하이다.
*/

function solution(msg) {
  const dict = {};
  const answer = [];
  let index = 1;

  for (let i = 65; i <= 90; i++) {
    dict[String.fromCharCode(i)] = index++;
  }

  let i = 0;

  while (i < msg.length) {
    let wc = msg[i];
    let cnt = 1;

    while (i + cnt <= msg.length && dict.hasOwnProperty(wc)) {
      wc += msg[i + cnt++];
    }

    answer.push(dict[msg.substr(i, cnt - 1)]);
    dict[wc] = index++;
    i += cnt - 1;
  }

  return answer;
}

console.log(solution("KAKAO")); // [11, 1, 27, 15]
console.log(solution("TOBEORNOTTOBEORTOBEORNOT"));
// [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution("ABABABABABABABAB")); //	[1, 2, 27, 29, 28, 31, 30]
