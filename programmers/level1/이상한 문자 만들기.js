// 문자열 s의 각 단어별로 짝수번째 대문자, 홀수번째 소문자로 바꾼 문자열 리턴

// function solution(s) {
//   let newWord = "";

//   s.trim()
//     .split(" ")
//     .forEach((word, index) => {
//       for (let i = 0; i < word.length; i++) {
//         if (i % 2 === 0) newWord += word[i].toUpperCase();
//         else newWord += word[i].toLowerCase();
//       }

//       newWord += " ";
//     });

//   return newWord.trim();
// }

function solution(s) {
  let index = 0;
  let answer = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i] === " ") {
      index = 0;
      answer += " ";
      continue;
    } else if (index % 2 === 0) {
      answer += s[i].toUpperCase();
    } else {
      answer += s[i].toLowerCase();
    }

    index++;
  }

  return answer;
}

console.log(solution("try hello world")); // "TrY HeLlO WoRlD"
