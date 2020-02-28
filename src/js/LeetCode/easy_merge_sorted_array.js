/* eslint-disable no-continue */
// https://github.com/azl397985856/leetcode/blob/master/problems/88.merge-sorted-array.md

export const mergeBrutal = function(nums1, m, nums2, n) {
  if (n === 0) return;

  let current2 = 0;

  for (let i = nums1.length - 1; i > nums1.length - 1 - n; i--) {
    nums1[i] = nums2[current2++];
  }

  nums1.sort((a, b) => a - b);
};

export const merge = function(nums1, m, nums2, n) {
  for (let i = n + m - 1; i >= 0; i--) {
    if (n === 0) break;

    if (m === 0) {
      nums1[i] = nums2[n - 1];
      n -= 1;

      continue;
    }

    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[i] = nums1[m - 1];
      m -= 1;
    } else {
      nums1[i] = nums2[n - 1];
      n -= 1;
    }
  }
};
