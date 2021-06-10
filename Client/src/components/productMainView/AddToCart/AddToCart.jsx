import React, { useState, useEffect } from 'react';
import SizeSelectorOption from './SizeSelectorOption.jsx';
import QuantSelectorOption from './QuantSelectorOption.jsx';

var inStock = (skuArray) => {
  var isInStock = false;
  skuArray.forEach((sku) => {
    if (sku[1].quantity > 0) {
      isInStock = true;
    }
  });
  return isInStock;
};

var findQuant = (currentSizeSelected, skuArray) => {
  var quant = 0;
  skuArray.forEach((sku) => {
    if (sku[1].size === currentSizeSelected) {
      quant = sku[1].quantity;
    }
  });
  return quant;
};

//FIXME: add cart functionality
var onAddToCart = (currentSizeSelected, currentQuantSelected, currentStyleId) => {

};

// //show options of size dropdown --> "open"
// var showDropDown = () => {
//   var sizeDropdown = getElementById('sizeSelectorInStock');
//   sizeDropdown.size = sizeDropdown.length;
//   sizeDropdown.focus();
// };


var AddToCart = ({ currentStyleObj }) => {
  if (!currentStyleObj) { return ('data not found'); }
  var [currentSizeSelected, updateCurrentSizeSelected] = useState();
  var [currentQuantSelected, updateCurrentQuantSelected] = useState(1);
  var [isSizeSelected, updateIsSizeSelected] = useState(false);
  var [isQuantSelected, updateIsQuantSelected] = useState(false);
  var [isInStock, updateIsInStock] = useState();
  var [isSelectMsgVisable, updateIsSelectMsgVisable] = useState(false);
  var [skuArray, updateSkusArray] = useState(Object.entries(currentStyleObj.skus));

  useEffect(() => {
    updateSkusArray(Object.entries(currentStyleObj.skus));
    updateIsInStock(inStock(skuArray));
    updateIsSizeSelected(false);
    updateIsQuantSelected(false);
    updateIsSelectMsgVisable(false);
  }, [currentStyleObj]);


  return (
    <div className="AddToCart">
      {/* //select size message, renders if addToCart button pressed without style selected */}
      <div className={`${isSelectMsgVisable ? '' : 'hidden'}`}>Please select size</div>

      {/* //in stock selector */}
      <select name="sizeSelector" id="sizeSelectorInStock" className={`col-lg-7 form-select ${isInStock ? '' : 'hidden'}`} aria-label="Size selector" onChange={(event) => { updateIsSizeSelected(true); updateCurrentSizeSelected(event.target.value); }}>
        <option value='Select Size' selected disabled>Select Size</option>
        {skuArray.map((sku) => {
          if (sku[1].quantity > 0) {
            return <SizeSelectorOption sku={sku} />;
          }
        })}
      </select>

      {/* //Out of stock selector */}
      <select name="sizeSelector" id="sizeSelectorOutOfStock" className={`col-lg-7 form-select ${isInStock ? 'hidden' : ''}`} aria-label="Size selector - Out of Stock" disabled>
        <option value='OUT OF STOCK' selected>OUT OF STOCK</option>
      </select>

      {/* //if size is selected */}
      <select name="quantSelector" id="quantSelector" className={`col-lg-4 form-select ${isSizeSelected ? '' : 'hidden'}`} aria-label="Quantity selector" onChange={(event) => { updateCurrentQuantSelected(event.target.value); }} >
        {[...Array(findQuant(currentSizeSelected, skuArray)).keys()].map((num) => {
          if (num + 1 < 16) {
            return <QuantSelectorOption num={num + 1} />;
          }
        })}
      </select>

      {/* //if no size selected */}
      <select name="quantSelector" id="quantSelector" className={`col-lg-4 form-select ${isSizeSelected ? 'hidden' : ''}`} aria-label="Quantity selector disabled" disabled>
        <option value='-' disabled selected>-</option>
      </select>

      {/* AddToCart button
      if out of stock, is hidden
      if size not selected, makes IsSelectMsgVisable message show
      if quant and size are selected, "adds to cart" */}
      <button className={`btn AddToCartButton ${isInStock ? '' : 'hidden'}`} onClick={() => {
        if (!isSizeSelected) {
          updateIsSelectMsgVisable(true);
        } else if (isSizeSelected && isQuantSelected) {
          onAddToCart(currentSizeSelected, currentQuantSelected, currentStyleObj.style_id);
        }
      }}>Add to Bag</button>
    </div>
  );
};

export default AddToCart;