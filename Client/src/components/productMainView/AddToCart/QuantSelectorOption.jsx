import React, { useState } from 'react';

var QuantSelectorOption = ({ num }) => {
  if (num === 1) {
    return <option value={num} selected>{num}</option>;
  } else {
    return <option value={num}>{num}</option>;
  }
};

export default QuantSelectorOption;