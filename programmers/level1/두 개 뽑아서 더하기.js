function solution(numbers) {
  // 살행시간 줄이기위해 2개의 index 사용
  let idx1 = 0;
  let idx2 = 0;
  let isUsed = new Array(201); // 중복값 비교용. 가장 큰 결과값 200
  let current = undefined;
  const result = [];

  for (let i = 0; i < isUsed.length; i++) {
    isUsed[i] = 0;
  }

  while (idx1 < numbers.length) {
    current = numbers[idx1] + numbers[idx2];

    if (isUsed[current] == 0 && idx1 != idx2) {
      result.push(current);
      isUsed[current] = 1;
    }

    idx2++;

    if (idx2 == numbers.length) {
      idx1++;
      idx2 = 0;
    }
  }

  result.sort((a, b) => {
    return a - b;
  });

  return result;
}
