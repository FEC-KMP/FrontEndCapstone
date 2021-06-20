import React from 'react';

export default function Characteristics ({ metaInfo, characteristic, rating }) {
  if (!metaInfo) { return 'data not found'; }
  let lowerBound;
  let upperBound;

  const emptyBar = {
    width: '100%',
    height: 20,
    backgroundColor: 'grey'
  };

  const innerBar = {
    display: 'inline-block',
    width: `${rating * 20}%`,
    height: '100%'
  };

  if (characteristic === 'Fit') {
    lowerBound = 'Poor fit';
    upperBound = 'Perfect Fit';
  }
  if (characteristic === 'Length') {
    lowerBound = 'Too short';
    upperBound = 'Too long';
  }
  if (characteristic === 'Quality') {
    lowerBound = 'Made by Kirk';
    upperBound = 'Great quality';
  }
  if (characteristic === 'Comfort') {
    lowerBound = 'Poor';
    upperBound = 'Perfect';
  }

  return (
    <div>
      <div>
        <h5>{characteristic}</h5>
      </div>
      <div style={emptyBar}>
        <div style={innerBar}>
        </div>
      </div>
      <div>
        <p>{lowerBound}</p>
      </div>
      <div>
        <p>{upperBound}</p>
      </div>
    </div>
  );
}