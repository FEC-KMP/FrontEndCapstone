import React, { useState } from 'react';

var SizeSelectorOption = ({ sku }) => {
  return (
    <option value={sku[1].size}>sku[1].size</option>
  );
};

export default SizeSelectorOption;