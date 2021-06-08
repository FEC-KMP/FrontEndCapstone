import React from 'react';

const Response = ({ response }) => {
  return (
    <div>
      <p>{response ? 'Response: ' + response : ''}</p>
    </div>
  );
};

export default Response;