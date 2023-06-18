function solution(info, query) {
  function lowerBound(arr, target) {
    let start = 0;
    let end = arr.length; // 일반 이분탐색과 다름. 주의
    let mid;

    while (start < end) {
      mid = Math.floor((start + end) / 2);

      if (arr[mid] < target) {
        start = mid + 1;
      } else if (arr[mid] >= target) {
        end = mid;
      }
    }

    return start;
  }

  const answer = [];
  const infos = info.map((v) => v.split(" ")); // info params 가공
  const map = {}; // infos를 {key: value} 형태로 저장할 map

  infos.forEach((v) => {
    const infoScore = Number(v.pop());
    const key = v.join(""); // 지원자 정보를 공백을 제거한 string 형식으로 변환

    if (map[key]) {
      map[key].push(infoScore);
    } else {
      map[key] = [infoScore];
    }
  });

  // 탐색을 위해 그룹별 점수순으로 정렬
  for (const key in map) {
    map[key].sort((a, b) => a - b);
  }

  // query params 가공
  const queries = query.map((v) =>
    v.split(/ and | |-/i).filter((s) => s !== "")
  );

  const infoKeys = Object.keys(map);

  // main
  queries.forEach((conditions, i) => {
    const queryScore = Number(conditions.pop());
    const result = infoKeys
      .filter((key) => conditions.every((v) => key.includes(v))) // 쿼리에 맞는 key들 필터링
      .reduce((total, currentKey) => {
        // 필터링 된 key를 기준으로 점수 조건 확인 후 누적
        const lowerBoundPoint = lowerBound(map[currentKey], queryScore); // 쿼리 점수 이상이 등장하는 인덱스
        const currentScores = map[currentKey].slice(lowerBoundPoint); // 점수 조건까지 만족하는 사람들의 배열

        return total + currentScores.length;
      }, 0);

    answer.push(result);
  });

  return answer;
}

const inputs = [
  [
    "java backend junior pizza 150",
    "python frontend senior chicken 210",
    "python frontend senior chicken 150",
    "cpp backend senior pizza 260",
    "java backend junior chicken 80",
    "python backend senior chicken 50",
  ],
  [
    "java and backend and junior and pizza 100",
    "python and frontend and senior and chicken 200",
    "cpp and - and senior and pizza 250",
    "- and backend and senior and - 150",
    "- and - and - and chicken 100",
    "- and - and - and - 150",
  ],
];

console.log(solution(inputs[0], inputs[1]));
