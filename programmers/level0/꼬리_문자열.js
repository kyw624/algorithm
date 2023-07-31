function solution(str_list, ex) {
  return str_list.reduce(
    (acc, cur) => (cur.includes(ex) ? acc : acc + cur),
    ""
  );
  // return str_list.map((str) => (str.includes(ex) ? "" : str)).join("");
}
