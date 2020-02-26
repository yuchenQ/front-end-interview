// https://leetcode.com/problems/valid-palindrome-ii/
/**
 * @param {string} s
 * @return {boolean}
 */

export const validPalindromeFast = function(s) {
  let i = 0;
  let j = s.length - 1;

  let allowedErr = 1;

  while (i < j) {
    if (s[i] === s[j]) {
      i++;
      j--;
    } else if (s[i + 1] === s[j] && s[i + 2] === s[j - 1] && allowedErr) {
      i++;
      allowedErr--;
    } else if (s[j - 1] === s[i] && allowedErr) {
      j--;
      allowedErr--;
    } else {
      return false;
    }
  }

  return true;
};

export const validPalindromeSlow = function(s) {
  function cut(str, i) {
    return str.substring(0, i) + str.substring(i + 1);
  }

  function isPalindrome(str) {
    return str === [...str].reverse().join('');
  }

  for (let i = 0; i < s.length / 2; i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      const noLeft = cut(s, i);
      const noRight = cut(s, s.length - 1 - i);

      return isPalindrome(noLeft) || isPalindrome(noRight);
    }
  }

  return true;
};
