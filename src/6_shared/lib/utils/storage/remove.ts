export const remove = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Storage remove error', e);
  }
};
