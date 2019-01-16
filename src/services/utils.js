export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function areArraysEmpty(arrays) {
  return arrays.every(array => {
    return !array || array.length === 0;
  });
}
