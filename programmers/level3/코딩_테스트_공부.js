// 2022 카카오 테크 인턴십 기출문제

function solution(alp, cop, problems) {
  let targetAlp = alp;
  let targetCop = cop;

  problems.forEach(([alp_req, cop_req]) => {
    targetAlp = Math.max(alp_req, targetAlp);
    targetCop = Math.max(cop_req, targetCop);
  });

  const dp = Array.from({ length: 151 }, () => Array(151).fill(Infinity));
  dp[alp][cop] = 0;

  for (let i = alp; i <= targetAlp; i++) {
    for (let j = cop; j <= targetCop; j++) {
      if (i === targetAlp && j === targetCop) {
        return dp[targetAlp][targetCop];
      }

      if (i + 1 <= targetAlp) {
        dp[i + 1][j] =
          dp[i + 1][j] > dp[i][j] + 1 ? dp[i][j] + 1 : dp[i + 1][j];
      }

      if (j + 1 <= targetCop) {
        dp[i][j + 1] =
          dp[i][j + 1] > dp[i][j] + 1 ? dp[i][j] + 1 : dp[i][j + 1];
      }

      for (const [alp_req, cop_req, alp_rwd, cop_rwd, cost] of problems) {
        if (i >= alp_req && j >= cop_req) {
          const nextAlp = i + alp_rwd >= targetAlp ? targetAlp : i + alp_rwd;
          const nextCop = j + cop_rwd >= targetCop ? targetCop : j + cop_rwd;

          dp[nextAlp][nextCop] =
            dp[nextAlp][nextCop] > dp[i][j] + cost
              ? dp[i][j] + cost
              : dp[nextAlp][nextCop];
        }
      }
    }
  }
}

const inputs = [
  [
    10,
    10,
    [
      [10, 15, 2, 1, 2],
      [20, 20, 3, 3, 4],
    ],
  ],
  [
    0,
    0,
    [
      [0, 0, 2, 1, 2],
      [4, 5, 3, 1, 2],
      [4, 11, 4, 0, 2],
      [10, 4, 0, 4, 2],
    ],
  ],
];
const answers = [15, 13];

inputs.forEach((input, index) => {
  const answer = solution(...input);
  console.log(answer === answers[index], answer);
});
