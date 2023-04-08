/**
 * @param {number} x
 * @return {boolean}
 */

// My Solution
var isPalindrome = function (x) {
  if (x < 0) return false;

  const reverseNum = parseInt((x + '').split('').reverse().join(''));

  return x === reverseNum ? true : false;
};
