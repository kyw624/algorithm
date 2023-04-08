function solution(n, arr1, arr2) {
  let map1 = createArray(n, arr1),
    map2 = createArray(n, arr2),
    answer = [];

  answer = mergeMaps(n, map1, map2);

  return answer;
}

// 지도 생성 함수
const createArray = (n, arr) => {
  let map = new Array(n),
    binaryArr = [];

  for (let i = 0; i < n; i++) {
    map[i] = new Array(n);
    binaryArr = toBinary(n, arr[i]);
    for (let j = 0; j < n; j++) {
      map[i][j] = binaryArr.shift();
    }
  }
  return map;
};

// 진법 변환 함수
const toBinary = (n, decimal) => {
  let currentArr = [];

  let q = decimal, // 몫
    r; // 나머지

  while (q >= 1) {
    r = q % 2;
    q = parseInt(q / 2);

    currentArr.unshift(r);
  }

  // 0 채우기
  if (currentArr.length < n) {
    while (currentArr.length < n) {
      currentArr.unshift(0);
    }
  }
  return currentArr;
};

// 지도 합병 함수
const mergeMaps = (n, arr1, arr2) => {
  let mergedMap = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr1.length; j++) {
      if (arr1[i][j] == 1 || arr2[i][j] == 1) {
        j == 0 ? (mergedMap[i] = "#") : (mergedMap[i] += "#");
      } else {
        j == 0 ? (mergedMap[i] = " ") : (mergedMap[i] += " ");
      }
    }
  }
  return mergedMap;
};

/*
  ○ 입력 형식: 입력으로 지도의 한 변 크기 n과 2개의 정수 배열 arr1, arr2가 들어온다.

  ○ 조건
    1. 1 <= n <= 16
    2. arr1, arr2 는 길이 n인 정수 배열로 주어진다.
    3. 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다.
       즉 0 <= x <= (2^n - 1)을 만족한다.

  ○ 입출력 예제
    n: 5
    arr1: [9, 20, 28, 18, 11]
    arr2: [30, 1, 21, 17, 28]
    출력: ["#####","# # #", "### #", "#  ##", "#####"]

  ○ 풀이
    1. 지도 생성
    2. 이진수 변환 => toString(): 진법 변환 메소드
    3. 지도 합병

    
  * 리팩토링 필요
  * 조건 반영 필요
*/
