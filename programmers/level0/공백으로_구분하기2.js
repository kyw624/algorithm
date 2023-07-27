function solution(my_string) {
  // return my_string
  //   .replaceAll(/\s/g, ",")
  //   .split(",")
  //   .filter((v) => v !== "");

  // return my_string.split(' ').filter(v => v);

  return my_string.trim().split(/ +/);
}
