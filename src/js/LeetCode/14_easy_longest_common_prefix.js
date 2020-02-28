// https://leetcode-cn.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function(strs) {
  if (strs.length === 0) return '';

  let minLength = strs[0].length;

  for (let i = 1; i < strs.length; i++) {
    if (strs[i].length < minLength) {
      minLength = strs[i].length;
    }
  }

  let prefix = strs[0].substr(0, minLength);

  for (let i = 1; i < strs.length; i++) {
    let j = 0;

    for (; j < minLength; j++) {
      if (prefix[j] !== strs[i][j]) {
        break;
      }
    }

    prefix = prefix.substring(0, j);

    if (!prefix) {
      return '';
    }
  }

  return prefix;
};
