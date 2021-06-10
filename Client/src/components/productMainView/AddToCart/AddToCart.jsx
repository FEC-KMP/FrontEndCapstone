import React, { useState } from 'react';
import SizeSelectorOption from './SizeSelectorOption.jsx';
import QuantSelectorOption from './QuantSelectorOption.jsx';

var inStock = (skusArray) => {
  var isInStock = false;
  skusArray.forEach((sku) => {
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
      quant = sku[1].quant;
    }
  });
  return quant;
};

//FIXME: add cart functionality
onAddToCart = (currentSizeSelected, currentQuantSelected, currentStyleId) => {

};

//show options of size dropdown --> "open"
var showDropDown = () => {
  var sizeDropdown = getElementById('sizeSelectorInStock');
  sizeDropdown.size = sizeDropdown.length;
  sizeDropdown.focus();
};


var AddToCart = ({ currentStyleObj, styleInfo, onAddToBag }) => {
  if (!currentStyleObj) { return 'data not found'; }

  var [currentSizeSelected, updateCurrentSizeSelected] = useState();
  var [currentQuantSelected, updateCurrentQuantSelected] = useState();
  var [isSizeSelected, updateIsSizeSelected] = useState(false);
  var [isQuantSelected, updateIsQuantSelected] = useState(false);
  var [isInStock, updateIsInStock] = useState(false);
  var [isSelectMsgVisable, updateIsSelectMsgVisable] = useState(false);

  var skusArray = Object.entries(currentStyleObj.skus);
  updateIsInStock(inStock(skusArray));


  return (
    <div className="AddToCart">
      //select size message, renders if addToCart button pressed without style selected
      <div className={`${isSelectMsgVisable ? '' : 'hidden'}`}>Please select size</div>

      //in stock selector
      <select name="sizeSelector" id="sizeSelectorInStock" className={`col-lg-6 form-select ${isInStock ? '' : 'hidden'}`} aria-label="Size selector" onChange={(event) => { updateIsSizeSelected(true); updateCurrentSizeSelected(event.target.value); updateCurrentQuantSelected(findQuant(currentSizeSelected, skyArray)); }}>
        <option value='Select Size' selected disabled>Select Size</option>
        {skusArray.map((sku) => {
          if (sku[1].quantity > 0) {
            return <SizeSelectorOption sku={sku} />;
          }
        })}
      </select>

      //Out of stock selector
      <select name="sizeSelector" id="sizeSelectorOutOfStock" className={`col-lg-6 form-select ${isInStock ? 'hidden' : ''}`} aria-label="Size selector - Out of Stock" disabled>
        <option value='OUT OF STOCK' selected>OUT OF STOCK</option>
      </select>

      //if size is selected
      <select name="quantSelector" id="quantSelector" className={`col-lg-3 form-select ${isSizeSelected ? '' : 'hidden'}`} aria-label="Quantity selector" onChange={ (event) => { updateCurrentQuantSelected(event.target.value); }}>
        {[...Array(currentQuantSelected).keys()].map((num) => {
          if (num < 16) {
            return <QuantSelectorOption num={num} />;
          }
        })}
      </select>

      //if no size selected
      <select name="quantSelector" id="quantSelector" className={`col-lg-3 form-select ${isSizeSelected ? 'hidden' : ''}`} aria-label="Quantity selector disabled">
        <option vale='-' disabled>-</option>
      </select>

      <button className={`AddToCartButton ${isInStock ? '' : 'hidden'}`} onClick={() => {
        if (!isSizeSelected) {
          updateIsSelectMsgVisable(true);
        } else if (isSizeSelected && isQuantSelected) {
          onAddToBag(currentSizeSelected, currentQuantSelected, currentStyleObj.style_id);
        }
      }}>Add to Bag</button>
    </div>
  );
};

export default AddToCart;