/*
1. 선행 스킬: 특정 스킬을 배우기 전 먼저 배워야 하는 스킬.
2. 파라미터
  - skill: 선행 스킬 순서. (중복 X)
  - skill_trees: 유저들이 만든 스킬트리 배열.

[조건]
  - 스킬은 알파벳 대문자로 표기하며, 모든 문자열은 대문자로 이루어짐.
  - 스킬 순서와 스킬트리는 문자열로 표기.
  - 1 <= skill 문자열 길이 <= 26
  - 1 <= skill_trees 배열 길이 <= 20
  - 2 <= skill_trees 원소들 길이 <= 26 (중복 X)

[출력]
  - skill_trees 배열에서 가능한 스킬트리의 수를 반환.
*/

function solution(skill, skill_trees) {
  let answer = 0;

  for (let i = 0; i < skill_trees.length; i++) {
    const current = skill_trees[i];
    let flag = true;
    let index = 0;

    for (let j = 0; j < current.length; j++) {
      const charIndex = skill.indexOf(current.charAt(j));

      if (charIndex !== -1) {
        if (index === charIndex) index++;
        else if (index < charIndex) flag = false;
      }

      if (!flag) break;
    }

    if (flag) answer++;
  }

  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"])); // 2
