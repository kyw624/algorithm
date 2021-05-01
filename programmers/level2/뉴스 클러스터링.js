/*
1. 자카드 유사도 = 집합 간의 유사도를 검사하는 여러 방법 중 하나.
    >> 두 집합 A, B 사이의 자카드 유사도 J(A, B) = 두 집합의 교집합 크기를 합집합 크기로 나눈 값.
    >> A, B가 모두 공집합일 때에는 J(A, B) = 1 이다.
    >> ex) A = {1, 2, 3}, B = {2, 3, 4} 일 때,
           A ∩ B = {2, 3}, A ∪ B = {1, 2, 3, 4} 이므로,
           J(A, B) = 2 / 4 = 0.5
2. 입력받은 str1, str2를 두 글자씩 끊어서 다중집합의 원소로 만든다.
4. 최종적으로 두 문자열의 자카드 유사도를 구하는 문제.

[조건]
  - str1, str2의 길이는 2 이상 1,000 이하이다.
  - 영문자로 된 글자 쌍만 유효하고, 기타 공백이나 숫자, 특수 문자가 들어있는 경우는 버린다.
    >> ex) "ab+" 를 입력받으면, "ab"는 원소로, "b+"는 버린다.
  - 대소문자 구분 X

[출력]
  - 두 문자열의 자카드 유사도를 리턴.
    >> 유사도 값은 0 ~ 1 사이의 실수이므로, 다루기 쉽도록 65536을 곱한 후에 정수부만 출력.
*/

function solution(str1, str2) {
  const set1 = makeSet(str1.toUpperCase());
  const set2 = makeSet(str2.toUpperCase());

  const inter = set1
    .map((value) => {
      const idx = set2.indexOf(value);

      if (idx !== -1) {
        set2.splice(idx, 1);
        return value;
      }
    })
    .filter((res) => res !== undefined);
  const union = set1.concat(set2);

  return union.length === 0
    ? 65536
    : Math.floor((inter.length / union.length) * 65536);
}

function makeSet(str) {
  const set = [];
  const checkEng = /^[A-Z]+$/;

  for (let i = 0; i < str.length - 1; i++) {
    const current = str.substr(i, 2);

    if (checkEng.test(current) && current.length === 2) {
      set.push(current);
    }
  }

  return set;
}

console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "	AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536
console.log(solution("AA", "00")); // 0
console.log(solution("00", "AA")); // 0
console.log(solution("aaabbbb", "aaaabbb")); // 46811

// 5, 13 실패
