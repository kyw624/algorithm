// arr: 숫자 0 ~ 9로 이루어진 배열 / arr.length <= 1,000,000

function solution(arr) {
  const newArray = arr.filter((value, index) => {
    console.log(arr[index - 1]);
    if (index > 0 && value === arr[index - 1]) {
      return false;
    }

    return true;
  });

  return newArray;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]));
console.log(solution([4, 4, 4, 3, 3]));
