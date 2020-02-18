// https://github.com/azl397985856/leetcode/blob/master/problems/26.remove-duplicates-from-sorted-array.md

export function removeDuplicates(nums) {
  let ref = nums[0];

  for (let i = 1, len = nums.length; i < len; i += 1) {
    if (nums[i] !== ref) {
      ref = nums[i];
    } else {
      nums.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return nums.length;
}

// 双指针
/*
使用快慢指针来记录遍历的坐标:
- 开始时这两个指针都指向第一个数字
- 如果两个指针指的数字相同，则快指针向前走一步
- 如果不同，则两个指针都向前走一步
- 当快指针走完整个数组后，慢指针当前的坐标加1(index + 1)就是数组中不同数字的个数
*/
export function removeDuplicatesTwoP(nums) {
  let slowP = 0;

  for (let fastP = 0; fastP < nums.length; fastP += 1) {
    if (nums[fastP] !== nums[slowP]) {
      slowP += 1;
      nums[slowP] = nums[fastP];
    }
  }
  return slowP + 1;
}
