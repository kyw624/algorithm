function solution(elements) {
  const answer = new Set();
  const len = elements.length;

  let selectedNum = 1; // 부분 수열의 길이

  while (selectedNum <= len) {
    for (let i = 0; i < len; i++) {
      let result = 0;

      // 배열을 순회하며 부분 수열의 길이만큼 더함.
      for (let j = 0; j < selectedNum; j++) {
        result += elements[(i + j) % len]; // 배열 사이즈 초과 시 연결되게
      }

      answer.add(result);
    }

    selectedNum++;
  }

  return answer.size;
}
