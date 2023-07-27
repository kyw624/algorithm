function solution(myString, pat) {
  // return myString.match(new RegExp(pat, "ig")) ? 1 : 0;
  return new RegExp(pat, "ig").test(myString) ? 1 : 0;
}
  