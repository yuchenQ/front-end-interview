// 字符串仅由小写字母和 [] 组成，且字符串不会包含多余的空格。
// 示例一: 'abc' --> {value: 'abc'}
// 示例二：'[abc[bcd[def]]]' --> {value: 'abc', children: {value: 'bcd', children: {value: 'def'}}}

export function normalize(str) {
  const result = {};
  str
    // eslint-disable-next-line no-useless-escape
    .split(/[\[\]]/g)
    .filter(Boolean)
    .reduce((obj, item, index, a) => {
      obj.value = item;

      if (index === a.length - 1) {
        return obj;
      }

      return (obj.children = {});
    }, result);

  return result;
}
