/*
1. 도시 이름을 입력받아 정보를 제공하는 서비스.
2. DB를 불러올 때 캐시를 활용하는데 캐시 크기에 따른 실행시간을 측정.
  - cacheSize (캐시 크기)와 cities (도시이름 배열)을 입력 받는다.

[조건]
  - 0 <= cacheSize <= 30 인 정수.
  - 각 도시명은 공백, 숫자, 특수문자가 없는 영문자로 구성되며, 대소문자 구분 X.
  - 도시명은 최대 20자.
  - 캐시 교체 알고리즘은 LRU (Least Recently Used) 사용.
  - cache hit: 실행시간 1
  - cache miss: 실행시간 5

[출력]
  - 도시이름 배열을 순서대로 처리할 때 총 실행시간을 리턴.
*/

function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  const CACHE = [];
  let time = 0;

  for (let i = 0; i < cities.length; i++) {
    const currentCity = cities[i].toUpperCase();

    if (CACHE.indexOf(currentCity) !== -1) {
      // cache hit
      if (CACHE.indexOf(currentCity) < CACHE.length - 1) {
        CACHE.splice(CACHE.indexOf(currentCity), 1);
        CACHE.push(currentCity);
      }

      time += 1;
    } else {
      // cache miss
      if (CACHE.length >= cacheSize) {
        CACHE.shift();
      }

      time += 5;
      CACHE.push(currentCity);
    }
  }

  return time;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
); // 50

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
); // 21

console.log(
  solution(2, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
);
// 60

console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
); // 52

console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])); // 16

console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 25
