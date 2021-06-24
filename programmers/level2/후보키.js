/*
1. 주어진 릴레이션에서 후보키의 최대 개수를 구하는 문제.
2. 후보키는 유일성과 최소성을 만족해야한다.

[조건]
  - relation은 2차원 문자열 배열이다.
  - relation의 컬럼의 길이는 1 이상 8 이하이다. (= 속성)
  - relation의 로우의 길이는 1 이상 20 이하이다. (= 튜플)
  - relation의 모든 튜플은 유일하게 식별 가능하다. (즉, 중복되는 튜플은 없다.)
*/

function powerSet(arr) {
  const includes = new Array(arr.length).fill(false);
  const result = [];

  const dfs = (depth) => {
    if (depth === includes.length) {
      result.push(arr.filter((_, index) => includes[index]));
    } else {
      includes[depth] = true;
      dfs(depth + 1);

      includes[depth] = false;
      dfs(depth + 1);
    }
  };

  dfs(0);

  return result
    .filter((value) => value.length > 0)
    .sort((a, b) => a.length - b.length);
}

function checked(arr) {
  const temp = new Set();

  for (let x of arr) {
    if (temp.has(x.join(""))) {
      return false;
    } else {
      temp.add(x.join(""));
    }
  }

  return true;
}

function solution(relation) {
  const attrArr = Array.from({ length: relation[0].length }, (_, i) => i);
  let subSet = powerSet(attrArr);
  let answer = 0;

  while (subSet.length) {
    const now = subSet[0];
    const keys = relation.map((v) => v.filter((_, idx) => now.includes(idx)));

    if (checked(keys)) {
      answer++;
      subSet = subSet.filter((current) => {
        for (let idx of now) {
          if (!current.includes(idx)) return true;
        }

        return false;
      });
    } else {
      subSet.shift();
    }
  }

  return answer;
}

console.log(
  solution([
    ["100", "ryan", "music", "2"],
    ["200", "apeach", "math", "2"],
    ["300", "tube", "computer", "3"],
    ["400", "con", "computer", "4"],
    ["500", "muzi", "music", "3"],
    ["600", "apeach", "music", "2"],
  ])
); // 2
