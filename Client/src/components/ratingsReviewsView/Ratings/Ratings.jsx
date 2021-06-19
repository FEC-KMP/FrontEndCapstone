import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Average from './Average.jsx';
import Recommended from './Recommended.jsx';
import Breakdown from './Breakdown.jsx';

export default function Ratings ({ metaInfo }) {
  if (!metaInfo) { return 'data not found'; }

  return (
    <div className="ratings r100">
      <div>
        <Average metaInfo={metaInfo}/>
      </div>
      <div>
        <Recommended metaInfo={metaInfo} />
      </div>
      <div>
        <Breakdown metaInfo={metaInfo} />
      </div>
    </div>
  );
}