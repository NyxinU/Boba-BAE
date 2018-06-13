import axios from 'axios';

const url = 'http://localhost:3000';

export const fetchStore = id => (
  axios({
    method: 'GET',
    url: `${url}/api/stores/${id}`,
  })
);
