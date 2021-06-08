import React from 'react';
import ratings from './dummyMeta.js';

export default function Characteristics ({ ratings }) {
  var ratingsObj = ratings;
  return (
    <div>
      <div>
        Size: {ratingsObj.characteristics.Size.value}
      </div>
      <div>
        Width: {ratingsObj.characteristics.Width.value}
      </div>
      <div>
        Comfort: {ratingsObj.characteristics.Comfort.value}
      </div>
    </div>

  );
}