// https://github.com/azl397985856/leetcode/blob/master/problems/167.two-sum-ii-input-array-is-sorted.md
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
// 由于题目没有对空间复杂度有求，用一个hashmap 存储已经访问过的数字即可
export const twoSum = function(numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    if (map.has(target - numbers[i])) {
      return [map.get(target - numbers[i]) + 1, i + 1];
    }

    map.set(numbers[i], i);
  }

  return [];
};

// 假如题目空间复杂度有要求，由于数组是有序的，只需要双指针即可。一个left指针，一个right指针，
// 如果left + right 值 大于target 则 right左移动， 否则left右移
export const twoSumDoublePointer = function(numbers, target) {
  let right = numbers.length - 1;

  for (let i = 0; i < numbers.length; ) {
    if (numbers[i] + numbers[right] === target) {
      return [i + 1, right + 1];
    }

    if (numbers[i] + numbers[right] > target) {
      right -= 1;
    } else {
      i += 1;
    }
  }

  return [];
};
