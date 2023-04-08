/*
# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.

[입출력]
입력 : 거꾸로
출력 : 로꾸거
*/

const string = prompt('입력', '');
let result = '';

for (let i = string.length - 1; i >= 0; i--) {
  result += string.charAt(i);
}

// 다른 풀이
console.log(string.split('').reverse().join(''));
