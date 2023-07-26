function solution(my_string) {
  // return my_string.split('').map((_, i) => my_string.slice(i)).sort();

  const answer = [];

  for (let i = 0; i < my_string.length; i++) {
    answer.push(my_string.slice(i));
  }

  return answer.sort();
}
