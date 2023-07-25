function solution(my_string, queries) {
  let newString = my_string.split("");

  queries.forEach(([s, e]) => {
    const target = newString.slice(s, e + 1).reverse();
    const prev = newString.slice(0, s);
    const next = newString.slice(e + 1);

    newString = prev.concat(target, next);

    // ////
    // // splice()
    // const target = newString.slice(s, e + 1).reverse();
    // newString.splice(s, e - s + 1, ...target);
  });

  return newString.join("");
}
