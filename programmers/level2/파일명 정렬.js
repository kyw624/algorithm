/*
1. 파일명은 크게 세 부분으로 구성됨.
  - HEAD: 숫자가 아닌 문자. 최소한 한 글자 이상.
  - NUMBER: 1~5글자 사이의 연속된 숫자. 0~99999 사이의 숫자.
      ex) 00000, 0101 등도 가능함.
  - TAIL: 나머지 부분으로, 숫자가 다시 나타날 수도 있으며, 아무 글자도 없을 수 있다.
2. 파일명은 세 부분으로 나눈 후, 다음 기준에 따라 정렬한다.
  1) 우선 HEAD 부분을 기준으로 사전 순으로 정렬한다. (대소문자 구분 X)
  2) HEAD 부분이 대소문자 차이 외에는 같을 경우, NUMBER의 숫자 순으로 정렬한다.
     숫자 앞의 0은 무시되며, 012와 12는 정렬 시에 같은 값으로 처리된다.
        ex) 9 < 10 < 0011 < 012 < 13 < 014 순으로 정렬된다.
  3) HEAD와 NUMBER 부분이 같을 경우, 원래 입력에 주어진 순서를 유지한다.
    ex) "MUZI01.zip" 과 "muzi1.png" 를 입력받으면 순서가 바뀌어서는 안된다.

[조건]
  - 1000개 이하의 파일명을 포함하는 문자열 배열 files가 주어진다.
  - 파일명은 100글자 이내로, 영문 대소문자, 숫자, 공백, 마침표, 빼기로만 이루어져 있다.
  - 파일명은 영문자로 시작하며, 숫자를 하나 이상 포함하고 있다.
  - 중복 파일명은 없으나, 대소문자나 숫자 앞부분의 0 차이가 있는 경우는 함께 주어질 수 있다.
    ex) muzi1.txt, MUZI1.txt, muzi001.txt, muzi1.TXT
*/

function solution(files) {
  const chkHead = /\D+/i;
  const chkNum = /\d+/;

  return files.sort((a, b) => {
    const A_HEAD = a.match(chkHead)[0].toUpperCase();
    const B_HEAD = b.match(chkHead)[0].toUpperCase();

    if (A_HEAD > B_HEAD) {
      return 1;
    } else if (A_HEAD < B_HEAD) {
      return -1;
    } else {
      const A_NUMBER = a.match(chkNum);
      const B_NUMBER = b.match(chkNum);

      return A_NUMBER - B_NUMBER;
    }
  });
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
);
// ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
);
// ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
