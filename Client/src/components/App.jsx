import React from 'react';
import {getListOfProducts, getListInfoProducts} from '../context/ApiContext.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ListProducts: []

    };
  }

  componentDidMount() {
    const end = {
      listProducts: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products?page=1&count=5',
      listInfo: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld/products/18078'
    };
    getListOfProducts(end.listProducts);
    getListInfoProducts(end.listInfo);
  }
  render() {
    console.log('app');
    return (
      <div>
        hello !
      </div>
    );
  }

}

export default App;