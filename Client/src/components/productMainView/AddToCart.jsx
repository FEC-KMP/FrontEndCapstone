import React from 'react';

var AddToCart = ({currentStyleObj}) => {
  if (!currentStyleObj) { return 'data not found'; }
  return (
    <div className="AddToCart">
      <select name="sizeSelector" id="sizeSelector" className="col-lg-6"></select>
      <select name="quantSelector" id="quantSelector" className="col-lg-3">
      </select>
      <button className="AddToCartButton">Add to Bag</button>
    </div>
  );
};

export default AddToCart;