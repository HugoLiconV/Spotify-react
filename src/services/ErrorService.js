export function errorHandler(fn, handler) {
  return function(...params) {
    return fn(...params).catch(handler);
  };
}
