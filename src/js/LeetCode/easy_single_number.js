// https://github.com/azl397985856/leetcode/blob/master/problems/136.single-number.md
/**
 * @param {number[]} nums
 * @return {number}
 */
export const singleNumberMap = function(nums) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.has(nums[i])) {
      map.set(nums[i], 1);
    } else {
      map.delete(nums[i]);
    }
  }

  return [...map.keys()][0];
};

export const singleNumber = function(nums) {
  const sortedNums = nums.sort((a, b) => a - b);
  let single;

  for (let i = 0; i < sortedNums.length; i++) {
    if (sortedNums[i] !== sortedNums[i + 1]) {
      single = sortedNums[i];
    } else {
      i++;
    }
  }

  return single;
};
