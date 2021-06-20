import React from 'react';

export default function Characteristics ({ metaInfo, characteristic, rating }) {
  if (!metaInfo) { return 'data not found'; }
  let lowerBound;
  let upperBound;

  const emptyBar = {
    'width': '100%',
    'margin': 'auto',
    'height': '10px',
    'backgroundColor': 'white'
  };

  const pointer = {
    'zIndex': 1,
    'marginLeft': `${parseInt(rating, 10) / 5 * 100}%`,
    'transform': 'translate(-8px, -3px)'
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
        <div style={pointer}>▼</div>
      </div>
      <div id="bounds">
        <span>{lowerBound}</span>
        <span>{upperBound}</span>
      </div>
    </div>
  );
}