// 2022 카카오 테크 인턴십 기출문제

function solution(queue1, queue2) {
  let summedQueue1 = queue1.reduce((acc, cur) => acc + cur);
  let summedQueue2 = queue2.reduce((acc, cur) => acc + cur);

  const maxTries = 4 * (queue1.length + queue2.length);
  const targetNumber = (summedQueue1 + summedQueue2) / 2;

  if (!Number.isInteger(targetNumber)) {
    return -1;
  }

  let index1 = 0;
  let index2 = 0;
  let count = 0;

  while (summedQueue1 !== summedQueue2) {
    if (count === maxTries) {
      return -1;
    }

    if (summedQueue1 > summedQueue2) {
      const pop = queue1[index1++];
      queue2.push(pop);

      summedQueue1 -= pop;
      summedQueue2 += pop;
    } else {
      const pop = queue2[index2++];
      queue1.push(pop);

      summedQueue2 -= pop;
      summedQueue1 += pop;
    }

    count += 1;
  }

  return count;
}

// 투 포인터 풀이
function solution2(queue1, queue2) {
  let summedQueue1 = queue1.reduce((acc, cur) => acc + cur);
  let summedQueue2 = queue2.reduce((acc, cur) => acc + cur);

  const maxTries = 4 * (queue1.length + queue2.length);
  const half = (summedQueue1 + summedQueue2) / 2;
  const mergedQueue = [...queue1, ...queue2];

  if (!Number.isInteger(half)) {
    return -1;
  }

  let left = 0;
  let right = queue1.length;
  let count = 0;

  while (count < maxTries) {
    if (summedQueue1 === half) {
      return count;
    }

    if (summedQueue1 > half) {
      summedQueue1 -= mergedQueue[left++];
    } else {
      summedQueue1 += mergedQueue[right++];
    }

    count += 1;
  }

  return -1;
}

const inputs = [
  [
    [3, 2, 7, 2],
    [4, 6, 5, 1],
  ],
  [
    [1, 2, 1, 2],
    [1, 10, 1, 2],
  ],
  [
    [1, 1],
    [1, 5],
  ],
];
const answers = [2, 7, -1];

inputs.forEach((input, index) => {
  const answer = solution2(...input);
  console.log(answer === answers[index], answer);
});
