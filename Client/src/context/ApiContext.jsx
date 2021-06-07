import React, {createContext} from 'react';
import axios from 'axios';


const end = {
  listProducts: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products?page=1&count=5',
  listInfo: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/18078'
};

export const getListOfProducts = (endpoint) => axios.get('/products', {
  headers: {
    endpoint
  },
})
  .then((response) => {
    console.log(response.data)
    // callback(response.data);
  })
  .catch((err) => {
    console.log('error getting products', err)

  });

 export const getListInfoProducts = (endpoint) => axios.get('/products', {
  headers: {
    endpoint
  },
})
  .then((response) => {
    console.log(response.data);
    // callback(response.data);
  })
  .catch((err) => {
    console.log('error getting products info', err);

  });

// listInfoProducts(end.listInfo);
// getListOfProducts(end.listProducts);

// export default getListOfProducts;
