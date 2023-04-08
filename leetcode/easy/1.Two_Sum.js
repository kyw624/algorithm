/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    const fixed = nums[i];

    for (let j = i + 1; j < nums.length; j++) {
      if (fixed + nums[j] === target) {
        return [i, j];
      }
    }
  }
};
