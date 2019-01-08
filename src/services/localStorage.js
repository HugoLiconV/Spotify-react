export const loadItem = item => {
  try {
    const state = localStorage.getItem(item);
    if (state === null) {
      return undefined;
    }
    return state;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveItem = (key, value) => {
  if (key && value) {
    try {
      localStorage.setItem(key, value);
    } catch (err) {
      console.log(err);
    }
  } else {
    try {
      localStorage.removeItem(key);
    } catch (err) {
      console.log(err);
    }
  }
};
