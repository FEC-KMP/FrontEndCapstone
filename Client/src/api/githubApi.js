import axios from 'axios';

const end = {
  listProducts: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products?page=1&count=5`
}

const getListOfProducts = (endpoint, callback) => {
  axios.get('/products', {
    headers: {
      endpoint
    }
  })
    .then((response) => {
      console.log(response.data);
    });
}
getListOfProducts(end.listProducts, callback);