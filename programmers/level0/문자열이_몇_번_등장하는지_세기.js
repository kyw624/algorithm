function solution(myString, pat) {
  let index = 0;
  let count = 0;

  while (index <= myString.length - pat.length) {
    const check = myString.indexOf(pat, index);

    if (check !== -1) {
      count++;
      index = check + 1;
    } else {
      index++;
    }
  }

  return count;
}
