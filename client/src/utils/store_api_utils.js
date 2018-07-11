import axios from 'axios';

const url = 'http://localhost:3000';

export const fetchStore = id => (
  axios({
    method: 'GET',
    url: `${url}/api/stores/${id}`,
  })
);

export const fetchStores = data => (
  axios({
    method: 'GET',
    url: `${url}/api/stores/`,
    data: {data},
  })
);