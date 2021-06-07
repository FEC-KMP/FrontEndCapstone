import react from 'react';

const Summary = ({ summary }) => {
  let fullSummary = summary;
  //some sort of logic here conditioning to just do the first 60 characters if clicked on
  return (
    <div>
      <fullSummary/>
    </div>
  );
};

export default Summary;