function solution(dartResult) {
  let score = 0,
    count = 0,
    index = 0,
    current,
    bonus,
    answer,
    scoreArr = [];

  let optionCheck, numberCheck, toggle;

  const square = new Map([
    ["S", 1],
    ["D", 2],
    ["T", 3],
  ]);

  const substringFn = (idx, len) => {
    return dartResult.substr(idx, len);
  };

  while (count < 3) {
    current = 0;
    toggle = false;
    numberCheck = isNaN(substringFn(index + 1, 1));

    // 점수 자리수 체크
    if (numberCheck) {
      score = parseInt(substringFn(index, 1), 10);
      bonus = substringFn(index + 1, 1);
    } else {
      score = parseInt(substringFn(index, 2), 10);
      bonus = substringFn(index + 2, 1);
      toggle = true;
      index++;
    }

    current = Math.pow(score, square.get(bonus));
    optionCheck =
      substringFn(index + 2, 1) === "*" || substringFn(index + 2, 1) === "#";

    // 옵션 체크
    if (optionCheck) {
      switch (substringFn(index + 2, 1)) {
        case "*":
          if (count !== 0) scoreArr[count - 1] *= 2;
          current *= 2;
          break;
        case "#":
          current *= -1;
          break;
        default:
          return;
      }
      index += 3;
    } else {
      index += 2;
    }
    scoreArr[count] = current;
    count++;
  }
  return scoreArr.reduce((a, b) => a + b);
}

/*
  ○ 입력 형식: "점수|보너스|[옵션]" 으로 이루어진 문자열 3세트.
                예) "1S2D*3T"

  ○ 조건
    1. 점수는 0에서 10 사이의 정수이다.
    2. 보너스는 S, D, T 중 하나이다.
    3. 옵션은 *이나 # 중 하나이며, 없을 수도 있다.

  ○ 입출력 예제
    dartResult: 1S2D*3T
    answer: 37

  ○ 풀이
    1. 문자열 잘라서 각 점수 계산하며 저장
    2. 옵션 체크 후 저장 된 점수에 반영
    3. 합산
*/
