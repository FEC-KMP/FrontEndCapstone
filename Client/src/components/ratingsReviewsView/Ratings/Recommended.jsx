import React from 'react';

export default function Recommended ({ metaInfo }) {
  if (!metaInfo) { return 'data not found'; }
  const recommendedPercent = () => {
    const recommends = metaInfo.recommended;
    let totalRecommends = (Number(recommends['false']) + Number(recommends['true']));
    let trueRecommends = Number(recommends['true']);
    var result = (trueRecommends / totalRecommends) * 100;
    result = result.toFixed();
    return result;
  };

  const recommends = recommendedPercent();
  return (
    <div className="r100 rec">
      {recommends}% of reviews recommend this product
    </div>
  );
}