export const getStoreInfo = (store) => {
  return store[Object.keys(store)[0]];
};