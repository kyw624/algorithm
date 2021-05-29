/*
1. 재생시작시간, 종료시간, 음악제목, 악보가 제공되며 네오가 기억한 멜로디로 음악 제목을 찾는 문제.
2. 멜로디와 악보에 사용되는 음은 12개이다.
  >> C, C#, D, D#, E, F, F#, G, G#, A, A#, B
3. 각 음은 1분에 1개씩 재생된다.
4. 음악은 반드시 처음부터 재생되며 음악 길이보다 재생된 시간이 더 길 때는 끊김없이 처음부터 반복해서 재생된다.
5. 음악이 00:00를 넘겨서까지 재생되는 일은 없다.
6. 조건이 일치하는 음악이 여러 개일 때에는 재생된 시간이 제일 긴 음악 제목을 반환한다.
   재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
7. 조건이 일치하는 음악이 없을 때에는 "(None)" 을 반환한다.

[조건]
  - 멜로디를 담은 문자열 m의 길이는 1개 이상 1439개 이하이다.
  - 곡의 정보를 담은 배열 musicinfos는 100개 이하의 곡 정보를 담고 있다.
    >> 각각의 곡 정보는 ["음악의 시작 시각, 끝난 시각, 제목, 악보 정보"] 해당 형태로 구성된 문자열이다.
    >> 음악의 시각은 24시간 HH:MM 형식이다.
    >> 음악 제목은 ","를 제외하고 출력 가능한 문자로 표현된 길이 1 이상 64 이하의 문자열이다.
    >> 악보 정보는 음 1개 이상 1439개 이하로 구성되어 있다.

[출력]
  - 주어진 입력값들로 조건과 일치하는 음악 제목을 리턴.
*/

function solution(m, musicinfos) {
  const newMelody = m.replace(/(\D)#/g, (match, p1) => p1.toLowerCase());
  const scores = {};

  [...musicinfos].forEach((info) => {
    const [start, end, title, score] = info.split(",");
    const [startHH, startMM] = start.split(":");
    const [endHH, endMM] = end.split(":");
    const newScore = score.replace(/(\D)#/g, (match, p1) => p1.toLowerCase());
    const length = newScore.length;
    let time;
    let result = "";

    if (startHH > endHH && startHH === endHH && startMM <= endHH) {
      // 종료시각이 자정을 넘겼을 때
      time = (23 - startHH) * 60 + (60 - startMM);
    } else {
      time = (endHH - startHH) * 60 + (endMM - startMM);
    }

    for (let i = 0; i < time; i++) {
      result += newScore.charAt(i % length);
    }

    if (result.indexOf(newMelody) !== -1) {
      scores[title] = time;
    }
  });

  const toArray = Object.keys(scores);

  if (toArray.length === 0) {
    return "(None)";
  } else {
    return toArray.reduce((answer, current) => {
      if (scores[answer] < scores[current]) {
        return current;
      }

      return answer;
    }, toArray[0]);
  }
}

/*
  곡별로 쭉 진행한 문자열 만들고 총 재생시간과 함께 저장 (00:00 까지만 진행)
  그 중에서 멜로디와 일치하는 부분 찾음
    1) 재생시간 제일 긴 음악 제목
    2) 위 결과도 여러개면 앞에꺼 반환
  없으면 "(None)"
*/

console.log(
  solution("ABCDEFG", ["12:00,12:14,HELLO,CDEFGAB", "13:00,13:05,WORLD,ABCDEF"])
); // "HELLO"

console.log(
  solution("CC#BCC#BCC#BCC#B", [
    "03:00,03:30,FOO,CC#B",
    "04:00,04:08,BAR,CC#BCC#BCC#B",
  ])
); // "FOO"

console.log(
  solution("ABC", ["12:00,12:14,HELLO,C#DEFGAB", "13:00,13:05,WORLD,ABCDEF"])
); // "WORLD"
