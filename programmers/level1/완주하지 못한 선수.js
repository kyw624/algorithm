// participant: 참여 선수들 이름 배열
// completion: 완주 선수들 이름 배열

// return 완주하지 못한 선수 이름

function solution(participant, completion) {
  participant.sort();
  completion.sort();

  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}

solution(["leo", "kiki", "eden"], ["eden", "kiki"]);
