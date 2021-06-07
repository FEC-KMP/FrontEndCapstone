import React from 'react';
import ProductMain from './productMainView/productMain.jsx';
import getListOfProducts from '../api/githubApi.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount() {
    const end = {
      listProducts: `https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products?page=1&count=5`
    };
    getListOfProducts(end.listProducts);
  }
  render() {
    return (
      <div>
        <div className="logoBanner"></div>
        <ProductMain />
      </div>
    );
  }

}

export default App;