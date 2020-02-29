// https://github.com/azl397985856/leetcode/blob/master/problems/20.validParentheses.md

export function isValid(s) {
  if (s === '') {
    return true;
  }

  const stack = [];
  const refs = ['(', '[', '{'];

  const map = new Map();

  map.set('{', '}');
  map.set('[', ']');
  map.set('(', ')');

  for (let i = 0; i < s.length; i++) {
    const thisChar = s[i];

    if (refs.includes(thisChar)) {
      stack.push(thisChar);
    } else {
      const leftBracket = stack.pop();

      if (thisChar !== map.get(leftBracket)) return false;
    }
  }

  if (stack.length > 0) return false;

  return true;
}
