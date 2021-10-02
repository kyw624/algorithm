/*
1. i행 j열 = i번 학생이 평가한 j번 학생의 과제 점수.
2. 상호평가지를 보고 평균을 낼 때, 자기 자신이 평가한 점수가 "유일한" 최고점 or 최저점이라면
   해당 점수는 제외하고 평균을 구한다.
3. 평균 점수로 기준에 따라 학점을 매긴 후 0번 학생부터 순서대로 학점을 출력하는 문제.

[조건]
  - 행의 길이 (=열의 길이, 학생 수): 2 <= scores <= 10
  - 점수 최소, 최댓값: 0 <= scores의 원소 <= 100

[출력]
  - 0번 학생의 학점부터 차례대로 이어 붙인 하나의 문자열을 리턴.
*/

// function solution(scores) {
//   let answer = 0;

//   for (let j = 0; j < scores; j++) {
//     let max = 0;
//     let min = "Infinity";
//     let total = 0;
//     let count = 0;

//     for (let i = 0; i < scores; i++) {
//       max = max < scores[i][j] ? scores[i][j] : max;
//       min = min > scores[i][j] ? scores[i][j] : min;
//     }

//     if (max === scores[i][j])
//   }
// }

function solution(scores) {
  const avg = [];
  let answer = "";

  for (let j = 0; j < scores.length; j++) {
    const current = [];
    let people = scores.length;

    for (let i = 0; i < scores.length; i++) {
      current.push(scores[i][j]);
    }

    const max = Math.max.apply(null, current);
    const min = Math.min.apply(null, current);

    current.sort((a, b) => a - b);

    if (scores[j][j] === max && current[scores.length - 2] < max) {
      current.pop();
      people--;
    } else if (scores[j][j] === min && current[1] > min) {
      current.shift();
      people--;
    }

    avg.push(current.reduce((acc, cur) => acc + cur) / people);
  }

  for (let i = 0; i < avg.length; i++) {
    switch (parseInt(avg[i] / 10)) {
      case 10:
      case 9:
        answer += "A";
        break;
      case 8:
        answer += "B";
        break;
      case 7:
        answer += "C";
        break;
      case 6:
      case 5:
        answer += "D";
        break;
      default:
        answer += "F";
        break;
    }
  }

  return answer;
}

console.log(
  solution([
    [100, 90, 98, 88, 65],
    [50, 45, 99, 85, 77],
    [47, 88, 95, 80, 67],
    [61, 57, 100, 80, 65],
    [24, 90, 94, 75, 65],
  ])
);
console.log(
  solution([
    [50, 90],
    [50, 87],
  ])
);
console.log(
  solution([
    [70, 49, 90],
    [68, 50, 38],
    [73, 31, 100],
  ])
);
