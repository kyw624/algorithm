function solution(plans) {
  // plans = [name, start, playtime]
  // start: "hh:mm"
  // playtime: minute

  const answer = [];
  const delayPlans = []; // stack: [[과제명, 남은 시간]] 형태
  const newPlans = plans
    .map((plan) => {
      const [hh, mm] = plan[1].split(":").map((v) => +v);
      return [plan[0], hh * 60 + mm, +plan[2]];
    })
    .sort((a, b) => a[1] - b[1]);

  const q = [...newPlans];
  let currentTime = q[0][1];

  while (q.length) {
    const [name, startTime, playTime] = q.shift(); // 이번 할 일
    const nextWork = q[0]; // 다음 할 일

    if (currentTime === startTime) {
      // 1. 현재 시간이 시작 시간과 같다면: 과제 시작
      if (nextWork) {
        if (currentTime + playTime <= nextWork[1]) {
          answer.push(name);
          currentTime += playTime;
        } else {
          const different = currentTime + playTime - nextWork[1];

          delayPlans.push([name, different]);
          currentTime += playTime - different;
        }
      } else {
        // queue가 비었다면 바로 넣고 종료
        answer.push(name);
      }
    } else if (currentTime < startTime) {
      // 2. 시간이 남으면: 미룬 과제 확인
      if (delayPlans.length) {
        // 미룬 과제가 있는 경우
        const [dName, dPlay] = delayPlans.pop();
        const different = currentTime + dPlay - startTime;

        if (different <= 0) {
          // 1) 시간차가 0보다 작거나 같다: 미룬 과제 마칠 수 있음.
          answer.push(dName);
          currentTime += dPlay;
        } else {
          // 2) 시간차가 0보다 크다: 전부 못 끝냄.
          delayPlans.push([dName, different]);
          currentTime = startTime;
        }
      } else {
        // 미룬 과제가 없는 경우
        currentTime = startTime;
      }

      q.unshift([name, startTime, playTime]); // 비효율적. 리팩토링 필요
    }
  }

  while (delayPlans.length) {
    answer.push(delayPlans.pop()[0]);
  }

  return answer;
}

console.log(
  solution([
    ["korean", "11:40", "30"],
    ["english", "12:10", "20"],
    ["math", "12:30", "40"],
  ])
); // ["korean", "english", "math"]
console.log(
  solution([
    ["science", "12:40", "50"],
    ["music", "12:20", "40"],
    ["history", "14:00", "30"],
    ["computer", "12:30", "100"],
  ])
); // ["science", "history", "computer", "music"]
console.log(
  solution([
    ["aaa", "12:00", "20"],
    ["bbb", "12:10", "30"],
    ["ccc", "12:40", "10"],
  ])
); // ["bbb", "ccc", "aaa"]
