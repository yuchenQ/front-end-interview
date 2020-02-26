// https://github.com/azl397985856/leetcode/blob/master/problems/169.majority-element.md
/**
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = function(nums) {
  return nums.sort((a, b) => a - b)[Math.ceil((nums.length - 1) / 2)];
};

export const majorityElementVoting = function(nums) {
  let count = 1;
  let majority = nums[0];

  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      majority = nums[i];
    }
    if (nums[i] === majority) {
      count++;
    } else {
      count--;
    }
  }
  return majority;
};
