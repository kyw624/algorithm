function solution(array, n) {
  return array.reduce((res, cur) => {
    const curDiff = Math.abs(cur - n);
    const resDiff = Math.abs(res - n);

    if (curDiff < resDiff) {
      return cur;
    } else if (curDiff > resDiff) {
      return res;
    } else {
      return Math.min(res, cur);
    }
  });

  // let min = 99;

  // const candidates = array.map((num) => {
  //   const diff = Math.abs(num - n);

  //   if (diff < min) min = diff;

  //   return {
  //     num,
  //     diff,
  //   };
  // });

  // const result = candidates
  //   .filter((v) => v.diff === min)
  //   .sort((a, b) => a.num - b.num);

  // return result[0].num;
}
