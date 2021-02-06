/*
1. 기존 단품메뉴들을 조합해 새로운 코스요리 메뉴로 제공
  > 이전에 가장 많이 함께 주문한 단품메뉴들로 구성
2. 코스요리 메뉴 후보는 최소 2가지 이상, 최소 2명 이상의 손님에게 주문된 단품메뉴 조합
  > 2명 이상의 손님에게 주문된 메뉴들로 2가지 이상의 조합으로 구성
3. 파라미터
  - orders: 각 손님들이 주문한 단품메뉴들
  - course: 추가하고 싶은 코스요리의 단품메뉴 갯수

[조건]
  - 2 <= orders.length <= 20
  - orders의 각 원소는 2 이상 10 이하인 문자열 (전부 대문자이며 중복 X)
  - 1 <= course.length <= 10
  - course의 각 원소는 2 이상 10 이하인 자연수가 오름차순 정렬 (중복 X)

[출력]
  - 새로 추가하게 될 코스요리 메뉴 구성을 문자열 형태로 배열에 담아 사전 순으로 오름차순 return.
*/

function solution(orders, course) {
  const result = [];
  let maxRange = 0;

  orders.forEach((value) => {
    if (value.length > maxRange) maxRange = value.length;
  });

  for (let i = 0; i < course.length; i++) {
    if (course[i] > maxRange) break;

    const obj = {};
    let max = 0;

    for (let j = 0; j < orders.length; j++) {
      const combin = combination(orders[j].split("").sort(), course[i]);

      for (let k = 0; k < combin.length; k++) {
        const menu = combin[k].join("");

        if (obj.hasOwnProperty(menu)) {
          obj[menu]++;
        } else {
          obj[menu] = 1;
        }
      }
    }

    max = Object.values(obj).reduce((a, b) => Math.max(a, b));

    const keys = Object.keys(obj);

    for (let j = 0; j < keys.length; j++) {
      if (obj[keys[j]] === max && obj[keys[j]] >= 2) result.push(keys[j]);
    }
  }

  return result.sort();
}

function combination(arr, num) {
  const result = [];

  if (num === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr.slice(idx + 1);
    const combinationArr = combination(restArr, num - 1);
    const combineFix = combinationArr.map((v) => [fixed, ...v]);

    result.push(...combineFix);
  });

  return result;
}

console.log(
  solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4])
); // ["AC", "ACDE", "BCFG", "CDE"]
console.log(
  solution(["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"], [2, 3, 5])
); // ["ACD", "AD", "ADE", "CD", "XYZ"]
console.log(solution(["XYZ", "XWY", "WXA"], [2, 3, 4])); // ["WX", "XY"]
