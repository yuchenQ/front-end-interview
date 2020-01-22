/* eslint-disable no-console */
import {
  distinctByForLoop,
  distinctByFilter,
  distinctBySort,
  distinctBySet,
  distinctByObject,
} from './remove_duplicate_array';

const duplicated = [1, 2, 2, 3, 3];

console.log('distinctByForLoop', distinctByForLoop(duplicated));
console.log('distinctByFilter', distinctByFilter(duplicated));
console.log('distinctBySort', distinctBySort(duplicated));
console.log('distinctBySet', distinctBySet(duplicated));

const mutatedDuplicated = [
  1,
  1,
  '1',
  '1',
  null,
  null,
  undefined,
  undefined,
  new String('1'),
  new String('1'),
  /a/,
  /a/,
  NaN,
  NaN,
];

console.log('distinctByObject', distinctByObject(mutatedDuplicated));
