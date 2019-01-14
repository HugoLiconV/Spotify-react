export function areArraysEmpty(arrays) {
  return arrays.every(array => {
    return !array || array.length === 0;
  });
}
