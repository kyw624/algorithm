function solution(s) {
  const numbers = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const isNumber = (char) => char.match(/[0-9]/);

  let str = "";
  let answer = "";

  for (const v of s) {
    if (isNumber(v)) {
      answer += v;
    } else {
      str += v;

      if (numbers[str] !== undefined) {
        answer += numbers[str];
        str = "";
      }
    }
  }

  return Number(answer);
}
