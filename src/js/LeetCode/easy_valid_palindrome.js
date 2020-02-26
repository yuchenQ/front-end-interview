// https://github.com/azl397985856/leetcode/blob/master/problems/125.valid-palindrome.md
/**
 * @param {string} s
 * @return {boolean}
 */

export const isPalindrome = function(s) {
  const pureStr = s.replace(/[\W]/g, '').toLowerCase();

  return pureStr === [...pureStr].reverse().join('');
};
