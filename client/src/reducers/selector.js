export const getStoreInfo = (store) => {
  return store[Object.keys(store)[0]];
};

export const getStores = (businesses) => {
  return businesses.map(business => { return business.alias; } );
};