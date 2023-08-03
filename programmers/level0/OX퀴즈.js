function solution(quiz) {
  return quiz.map((q) => {
    const [X, operator, Y, , Z] = q.split(" ").map((v) => (!isNaN(v) ? +v : v));
    const sign = operator === "+" ? 1 : -1;

    return X + Y * sign === Z ? "O" : "X";
  });
}
