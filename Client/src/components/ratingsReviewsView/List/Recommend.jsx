import React from 'react';

const Recommend = ({ recommend }) => {
  return (
    <div>
      {(recommend ? 'I recommend this' : '')}
    </div>
  );
};

export default Recommend;