// String 배열 seoul의 요소 중 'Kim'의 위치를 찾아, "김서방은 x에 있다"를 반환

function solution(seoul) {
  return `김서방은 ${seoul.indexOf("Kim")}에 있다`;
}

console.log(solution(["Jone", "Kim"]));
