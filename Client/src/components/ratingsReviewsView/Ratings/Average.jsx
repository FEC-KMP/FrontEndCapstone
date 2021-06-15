import React from 'react';



export default function Average ({ metaInfo }) {
  if (!metaInfo) { return 'data not found'; }
  const ratingAverage = () => {
    const ratings = metaInfo.ratings;
    let totalRatings = 0;
    let avarageRating = 0;
    for (var key in ratings) {
      totalRatings += Number(ratings[key]);
      avarageRating += (Number(key) * Number(ratings[key]));
    }
    var result = (avarageRating / totalRatings);
    result = result.toFixed(1);
    return result;
  };
  const average = ratingAverage();
  return (
    <h3 className="average">{average} </h3>
  );
}

// const ratingAverage = (productId) => {
//   return axios.get(`${BaseUrl}/meta/?product_id=${productId}`)
//     .then((result) => {
//       const ratings = result.data.ratings;
//       let totalRatings = 0;
//       let averageRating = 0;
//       for (var key in ratings) {
//         totalRatings += ratings[key];
//         avarageRating += (Number(key) * ratings[key]);
//       }
//       return averageRating / totalRatings;
//     })
//     .catch((err) => {
//       console.log('err in rating average', err);
//     });
// };
