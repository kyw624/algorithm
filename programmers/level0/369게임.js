function solution(order) {
  // Set
  const orderSet = new Set(["3", "6", "9"]);

  return [...order.toString()].filter((v) => orderSet.has(v)).length;

  // 정규식
  // return [...order.toString().matchAll(/[3|6|9]/g)].length;

  // Array.reduce
  // return [...order.toString()].reduce(
  //   (res, cur) => res + (cur === "3" || cur === "6" || cur === "9"),
  //   0
  // );
}
