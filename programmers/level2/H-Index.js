/*
1. H-Index: 과학자의 생산성과 영향력을 나타내는 지표.
2. 어떤 과학자가 발표한 논문 n편 중,
    h번 이상 인용된 논문이 h편 이상이고 나머지 논문이 h번 이하 인용되었을 때
    h의 최댓값이 이 과학자의 H-Index.
3. 파라미터
  - citations: 논문의 인용 횟수가 담긴 배열

[조건]
  - 1 <= 논문의 수 <= 1,000
  - 0 <= 논문별 인용 횟수 <= 10,000

[출력]
  - 해당 과학자의 H-Index를 반환
*/

function solution(citations) {
  const sortList = [...citations].sort((a, b) => b - a);
  let index = 0;

  if (sortList[0] === 0) return 0;

  for (let i = 0; i < citations.length; i++) {
    if (sortList[i] <= i) break;
    else index++;
  }

  return index;
}

console.log(solution([3, 0, 6, 1, 5])); // 3
console.log(solution([10, 50, 100])); // 3
