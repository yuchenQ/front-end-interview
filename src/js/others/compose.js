export function compose(...functions) {
  return function(parameter) {
    return functions.reduceRight(function(thisParam, thisFunc) {
      return thisFunc(thisParam);
    }, parameter);
  };
}

export const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
