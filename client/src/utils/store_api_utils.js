import axios from 'axios';

const url = 'http://localhost:3000';

// export const createStore = store => (
//   axios({
//     method: 'POST',
//     url: `${url}/api/stores`,
//     data: { store },
//   })
// );

export const fetchStore = id => (
  axios({
    method: 'GET',
    url: `${url}/api/stores/${id}`,
    data: { store: id },
  })
);
