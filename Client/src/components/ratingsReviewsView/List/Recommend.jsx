import React from 'react';
{/* <i class="fas fa-check"></i> */}
const Recommend = ({ recommend }) => {
  return (
    <div className="r100 rec">
      {(recommend ? 'I recommend this product' : '')}
    </div>
  );
};

export default Recommend;