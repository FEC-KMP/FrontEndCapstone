import React from 'react';

var AddToCart = () => {
  return (
    <div className="AddToCart">
      <select name="sizeSelector" id="sizeSelector"></select>
      <select name="quantSelector" id="quantSelector">
      </select>
      <button className="AddToCartButton">Add to Bag</button>
    </div>
  );
};

export default AddToCart;