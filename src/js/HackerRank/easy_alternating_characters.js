// https://www.hackerrank.com/challenges/alternating-characters/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=strings

// 只要有两个相同的字母连在一起，必然删掉一个
export function alternatingCharacters(s) {
  return s.split('').reduce((count, char, index, array) => {
    return char === array[index + 1] ? count + 1 : count;
  }, 0);
}
