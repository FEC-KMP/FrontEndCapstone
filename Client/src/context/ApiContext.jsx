import React, { createContext } from 'react';
import axios from 'axios';


const end = {
  listProducts: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products?page=1&count=5',
  listInfo: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/18078',
  reviews: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/reviews?count=${5}&sort=${helpfulness}&product_id=${18078}`
};

export const getListOfProducts = (endpoint) => axios.get('/api', {
  headers: {
    endpoint
  },
})
  .then((response) => {
    console.log('List of products', response.data);
    // callback(response.data);
  })
  .catch((err) => {
    console.log('error getting products', err);

  });

export const getListInfoProducts = (endpoint) => axios.get('/api', {
  headers: {
    endpoint
  },
})
  .then((response) => {
    console.log('list of info product', response.data);
    // callback(response.data);
  })
  .catch((err) => {
    console.log('error getting products info', err);

  });
export const getListOfReviews = (endpoint) => axios.get('/api', {
  headers: {
    endpoint
  },
})
  .then((response) => {
    console.log('list of reviews', response.data);
    // callback(response.data);
  })
  .catch((err) => {
    console.log('error getting products reviews', err);

  });
export const getListOfQuestions = (endpoint) => axios.get('/api', {
  headers: {
    endpoint
  },
})
  .then((response) => {
    console.log('list of questions', response.data);
    // callback(response.data);
  })
  .catch((err) => {
    console.log('error getting products reviews', err);

  });

// listInfoProducts(end.listInfo);
// getListOfProducts(end.listProducts);

// export default getListOfProducts;
