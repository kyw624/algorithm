function solution(cacheSize, cities) {
  let answer = 0;

  const CACHE_HIT = 1,
    CACHE_MISS = 5;

  if (cities.length > 100000) {
    console.error("에러: 최대 도시 수는 100,000개입니다.");
    return;
  }

  let queue = new Queue(cacheSize);

  for (let i = 0; i < cities.length; i++) {
    const cityToLowerCase = cities[i].toLowerCase();

    if (cacheSize === 0) {
      answer = cities.length * CACHE_MISS;
      return answer;
    } else if (queue.isEmpty()) {
      answer += CACHE_MISS;
    } else if (queue.size() <= cacheSize) {
      queue.cacheStore.indexOf(cityToLowerCase) !== -1
        ? (answer += CACHE_HIT)
        : (answer += CACHE_MISS);
    }
    queue.enqueue(cityToLowerCase);
  }
  return answer;
}

class Queue {
  constructor(cacheSize) {
    if (cacheSize < 0 || cacheSize > 30) {
      console.error("에러: cacheSize 범위 오류");
      return;
    }
    this.maxSize = cacheSize;
    this.cacheStore = [];
    this.front = 0;
    this.rear = cacheSize;
  }

  enqueue(value) {
    if (this.size() === this.maxSize) {
      this.dequeue();
    }
    this.cacheStore.push(value);
  }

  dequeue() {
    return this.cacheStore.shift();
  }

  isEmpty() {
    return this.cacheStore.length === 0 ? true : false;
  }

  size() {
    return this.cacheStore.length;
  }

  // front() {
  //   return this.cacheStore[this.front];
  // }

  // rear() {
  //   return this.cacheStore[this.rear];
  // }
}

/*

	○ 입력 형식
		1. 캐시 크기(cacheSize)와 도시이름 배열(cities)을 입력받음.
		2. cacheSize는 정수, 범위는 0 <= cacheSize <= 30.
		3. cities는 도시 이름으로 이뤄진 문자열 배열, 최대 도시 수는 100,000개.
		4. 각 도시 이름은 공백, 숫자, 특수문자 등이 없는 영문자로만 구성, 대소문자 구분 안함,
			 도시 이름은 최대 20자.

	○ 출력 형식
		1. 입력된 도시이름 배열을 순서대로 처리할 때, "총 실행시간" 출력.

  ○ 조건
    1. 캐시 교체 알고리즘은 LRU (Least Recently Used) 사용.
		2. cache hit일 경우 실행시간은 1.
		3. chache miss일 경우 실행시간은 5.

	○ 입출력 예제
		1. {
				cacheSize: 3
				cities: [Jeju, Pangyo, Seoul, NewYork, LA, Jeju, Pangyo, Seoul, NewYork, LA]
				실행시간: 50 (출력)
			 },
		2. {
				cacheSize: 5
				cities: [Jeju, Pangyo, Seoul, NewYork, LA, SanFrancisco, Seoul, Rome, Paris, Jeju, NewYork, Rome]
				실행시간: 52 (출력)
			 }

	○ 풀이
		1. 캐시 큐 구현
		2. 배열 순회하면서 큐와 비교
    3. 첫 캐시 크기만큼은 전부 miss => 큐의 크기가 cacheSize보다 작을동안
		4. 비교 후 큐 갱신 및 실행시간 누적
		5. 누적값 반환 

	○ 피드백
  	* 
  	* 
*/
