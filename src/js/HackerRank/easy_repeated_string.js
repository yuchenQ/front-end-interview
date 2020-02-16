// https://www.hackerrank.com/challenges/repeated-string/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

export function repeatedString(s, n) {
  const getOccurrenceOfA = string => [...string].filter(char => char === 'a').length;

  return (
    getOccurrenceOfA(s) * Math.floor(n / s.length) + getOccurrenceOfA(s.substring(0, n % s.length))
  );
}
