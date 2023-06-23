/*
       [입력]
       1. 요금표
       2. 차량 번호별 입차, 출차 기록
          
       [요구사항]
       1. 출차 내역 없다면, 23:59에 출차한 것으로 간주
       2. 요금 계산
           1) 누적 주차 시간 <= 기본시간: 기본 요금
           2) 누적 주차 시간 > 기본시간: 기본 요금 + 단위 시간마다 단위 요금
               - 초과 시간 나눌 때 "올림"
        
       [반환]
       차량 번호 작은 자동차부터
       요금을 정수 배열에 담아 return
       
       [제한사항]
       * fees.length = 4 [기본 시간(분), 기본 요금(원), 단위 시간(분), 단위 요금(원)]
           - 1 ≤ fees[0] ≤ 1,439
           - 0 ≤ fees[1] ≤ 100,000
           - 1 ≤ fees[2] ≤ 1,439
           - 1 ≤ fees[3] ≤ 10,000
           
       * 1 <= records.length <= 1,000 (시각 기준 오름차순 정렬되어 주어짐)
           - 형태: [["시각 차량번호 내역(=IN/OUT)", ...]]
           - 시각: 입차 또는 출차 시각, "HH:MM" 형식 문자열 (00:00 ~ 23:59)
                   > 잘못된 시각 입력은 없음
                   > 같은 시각에 같은 차량 입력은 없음
                   > 23:59 입차 없음 (무조건 출차)
           - 차량번호: 0~9로 구성 길이 4 문자열
           - 내역: IN or OUT
           - 잘못된 입력 주어지지 않음.
               ex) 주차장에 없는 차량 출차, 이미 주차된 차량 다시 입차
*/

/**
 *
 * @param {number[]} fees - 주차 요금표 [기본시간, 기본요금, 추가시간, 추가요금]
 * @param {string[]} records - 차량별 주차 기록 ["입차시간 차량번호 입/출차상태"]
 * @returns {number[]} - 차량번호 작은순으로 주차요금이 담긴 배열
 */
function solution(fees, records) {
  const carLogs = records.map((record) => {
    return record.split(" ").map((v, i) => {
      if (i === 0) {
        const [hh, mm] = v.split(":").map(Number);
        return hh * 60 + mm;
      } else {
        return v;
      }
    });
  });

  const lastTime = 23 * 60 + 59;
  const carSet = {};
  /*
  carSet = {
    carNumber: {
      state: IN/OUT, time: 마지막 입차시간 total: 누적 주차시간
    }
  }
  */

  carLogs.forEach((log) => {
    const [time, number, state] = log;

    if (!carSet[number]) {
      // 차량 기록이 없을 때
      carSet[number] = {
        state,
        time,
        total: 0,
      };
    } else {
      // 1. 있을 때
      if (carSet[number].state === "IN") {
        // 1-1. 주차 된 상태
        carSet[number].total += time - carSet[number].time;
      } else {
        // 1-2. 재입장 (state === 'OUT')
        carSet[number].time = time;
      }

      carSet[number].state = state;
    }
  });

  const result = Object.keys(carSet)
    .sort() // 차량번호 오름차순으로 계산
    .map((carNumber) => {
      const state = carSet[carNumber].state;

      if (state === "IN") {
        carSet[carNumber].state = "OUT";
        carSet[carNumber].total += lastTime - carSet[carNumber].time;
      }

      return calculate(carSet[carNumber].total, fees);
    });

  return result;
}

function calculate(totalTime, priceList) {
  const [baseTime, basePrice] = priceList.slice(0, 2);
  const [extraTime, extraPrice] = priceList.slice(2);
  let cost = 0;

  if (totalTime <= baseTime) {
    // 기본요금
    cost += basePrice;
  } else {
    // 기본요금 + 올림(추가시간 / 10) * 추가요금
    cost +=
      basePrice + Math.ceil((totalTime - baseTime) / extraTime) * extraPrice;
  }

  return cost;
}

const inputs = [
  [
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ],
  ], // [14600, 34400, 5000]
  [
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ],
  ], // [0, 591]
  [[1, 461, 1, 10], ["00:00 1234 IN"]], // [14841]
];

inputs.forEach((input, i) => {
  console.log(`${i + 1}번째 입력`);
  console.log(solution(...input));
  console.log();
});
