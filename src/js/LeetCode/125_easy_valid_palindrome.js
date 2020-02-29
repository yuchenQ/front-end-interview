// https://github.com/azl397985856/leetcode/blob/master/problems/125.valid-palindrome.md
/**
 * @param {string} s
 * @return {boolean}
 */

export const isPalindrome = function(s) {
  const pureStr = s.replace(/[\W]/g, '').toLowerCase();

  return pureStr === [...pureStr].reverse().join('');
};

export const isPalindromeDoublePointer = function(s) {
  const pureStr = s.replace(/[^0-9a-zA-Z]/g, '').toLowerCase();

  let leftP = 0;
  let rightP = pureStr.length - 1;

  while (leftP < rightP) {
    if (pureStr[leftP] !== pureStr[rightP]) {
      return false;
    }

    leftP += 1;
    rightP -= 1;
  }

  return true;
};
