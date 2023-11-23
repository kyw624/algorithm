// 2022 카카오 테크 인턴십 기출문제

// 점수: 3 2 1 0 1 2 3
// 입력: 1 2 3 4 5 6 7

const SCORE = [3, 2, 1, 0, 1, 2, 3];
const CATEGORIES = ['RT', 'CF', 'JM', 'AN'];
const INITIAL_SCORE_BOARD = [
  ['R', 0],
  ['T', 0],
  ['C', 0],
  ['F', 0],
  ['J', 0],
  ['M', 0],
  ['A', 0],
  ['N', 0],
];

function solution(survey, choices) {
  const scoreBoard = new Map(INITIAL_SCORE_BOARD);

  choices.forEach((choice, index) => {
    let targetType;

    if (choice < 4) {
      targetType = survey[index][0];
    } else {
      targetType = survey[index][1];
    }

    // 규칙성을 이용한 점수 구하는 방법: Math.abs(choice - 4);
    const calculatedScore = scoreBoard.get(targetType) + SCORE[choice - 1];

    scoreBoard.set(targetType, calculatedScore);
  });

  return CATEGORIES.reduce((result, category) => {
    const [typeA, typeB] = category.split('');
    const selectedType =
      scoreBoard.get(typeA) >= scoreBoard.get(typeB) ? typeA : typeB;

    return (result += selectedType);
  }, '');
}

const inputs = [
  [
    ['AN', 'CF', 'MJ', 'RT', 'NA'],
    [5, 3, 2, 7, 5],
  ],
  [
    ['TR', 'RT', 'TR'],
    [7, 1, 3],
  ],
];
const answers = ['TCMA', 'RCJA'];

inputs.forEach((input, index) => {
  const answer = solution(...input);
  console.log(answer === answers[index], answer);
});
