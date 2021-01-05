/*
1. 지도는 길이가 n인 정사각형으로 각 칸은 공백, 벽으로 이루어져있다.
2. 전체 지도는 지도 2개를 겹쳐서 얻을 수 있다. (arr1, arr2)
  - 하나라도 벽인 부분은 벽 / 모두 공백이어야 공백
3. 각 지도는 정수 배열로 암호화되어 있다.
  - arr1, arr2의 원소들은 각 지도의 가로줄의 정보를 나타낸다.
    (arr1, arr2의 각 원소를 이진수한 값의 배열)

[조건]
  - 1 <= n <= 16
  - arr1, arr2의 길이: n
  - 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다.

[출력]
  원래의 비밀지도를 해독해 '#', 공백으로 구성된 문자열 배열 반환.
*/

function solution(n, arr1, arr2) {
  const MAP = [];

  for (let i = 0; i < n; i++) {
    let binary1 = arr1[i].toString(2);
    let binary2 = arr2[i].toString(2);

    if (binary1.length < n) binary1 = "0".repeat(n - binary1.length) + binary1;
    if (binary2.length < n) binary2 = "0".repeat(n - binary2.length) + binary2;

    let result = "";

    for (let j = 0; j < n; j++) {
      if (binary1.charAt(j) === "1" || binary2.charAt(j) === "1") result += "#";
      else if (binary1.charAt(j) === "0" && binary2.charAt(j) === "0")
        result += " ";
    }

    MAP.push(result);
  }

  return MAP;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28])); // ["#####", "# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); // ["######", "### #", "## ##", " ####", " #####", "### # "]

// 지도들 한줄씩 비교하면서 원래 지도 반환
// 이진수화 후 하나라도 1이면 1, 둘다 0이면 0
