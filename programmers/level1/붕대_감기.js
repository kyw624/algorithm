function solution(bandage, health, attacks) {
  let currentHealth = health;
  let time = 0;
  let attackIndex = 0;

  while (attackIndex < attacks.length) {
    const [attackTime, damage] = attacks[attackIndex];
    const healingTime = attackTime - time - 1;
    const bonusHealingAmount = parseInt(healingTime / bandage[0]);

    currentHealth += bandage[1] * healingTime + bonusHealingAmount * bandage[2];

    if (currentHealth > health) {
      currentHealth = health;
    }

    currentHealth -= damage;

    if (currentHealth <= 0) {
      return -1;
    }

    time = attackTime;
    attackIndex += 1;
  }

  return currentHealth;
}

const inputs = [
  [
    [5, 1, 5],
    30,
    [
      [2, 10],
      [9, 15],
      [10, 5],
      [11, 5],
    ],
  ],
  [
    [3, 2, 7],
    20,
    [
      [1, 15],
      [5, 16],
      [8, 6],
    ],
  ],
  [
    [4, 2, 7],
    20,
    [
      [1, 15],
      [5, 16],
      [8, 6],
    ],
  ],
  [
    [1, 1, 1],
    5,
    [
      [1, 2],
      [3, 2],
    ],
  ],
];
const answers = [5, -1, -1, 3];

inputs.forEach((input, i) =>
  console.log(solution(...input) === answers[i], answers[i])
);
