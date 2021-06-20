// const supertest = require('supertest');
// const axios = require('axios');
// const app = require('../server/index.js');
// const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
// const config = require('../server/config.js');


// jest.mock('axios');
// const request = supertest(app);

<<<<<<< HEAD
describe('Ratings and Reviews routing', () => {
  test('Should get ONE specific review details', (done) => {
    axios.mockImplementationOnce(() => Promise.resolve({
      data: {
        'product_id': 18078,
        'ratings': {
          '1': '12',
          '2': '13',
          '3': '17',
          '4': '39',
          '5': '45',
          '6': '1'
        },
        'recommended': {
          'false': '68',
          'true': '59'
        },
        'characteristics': {
          Comfort: {
            id: 60620,
            value: '3.1346153846153846'
          },
          Fit: {
            id: 60618,
            value: '2.5820895522388060'
          },
          Length: {
            id: 60619,
            value: '2.8596491228070175'
          },
          Quality: {
            id: 60618,
            value: '2.9811320754716981'
          },
        },

      },
    })
    );
=======
// describe('Ratings and Reviews routing', () => {
//   test('Should get ONE specific review details', (done) => {
//     axios.mockImplementationOnce(() => Promise.resolve({
//       data: {
//         'id': 18078,
//         'campus': 'hr-bld',
//         'name': 'Camo Onesie',
//         'slogan': 'Blend in to your crowd',
//         'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
//         'category': 'Jackets',
//         'default_price': '140.00',
//         'created_at': '2021-02-23T05:08:00.350Z',
//         'updated_at': '2021-02-23T05:08:00.350Z',
//         'features': [
//           {
//             'feature': 'Fabric',
//             'value': 'Canvas',
//           },
//           {
//             'feature': 'Buttons',
//             'value': 'Brass',
//           },
//         ],
//       },
//     })
//     );
>>>>>>> c23b6ba5df1bcb8784d4bcbe674476ae92fe3e5f

//     request.get('/reviews/meta')
//       .then((response) => {
//         //1 response code
//         expect(response.status).toBe(200);

<<<<<<< HEAD
        //body info/structure
        expect(response.body).toEqual(
          expect.objectContaining({

            'product_id': 18078,
            'ratings': {
              '1': '12',
              '2': '13',
              '3': '17',
              '4': '39',
              '5': '45',
              '6': '1'
            },
            'recommended': {
              'false': '68',
              'true': '59'
            },
            'characteristics': {
              Comfort: {
                id: 60620,
                value: '3.1346153846153846'
              },
              Fit: {
                id: 60618,
                value: '2.5820895522388060'
              },
              Length: {
                id: 60619,
                value: '2.8596491228070175'
              },
              Quality: {
                id: 60618,
                value: '2.9811320754716981'
              },
            },


=======
//         //body info/structure
//         expect(response.body).toEqual(
//           expect.objectContaining({
//             'id': 18078,
//             'campus': 'hr-bld',
//             'name': 'Camo Onesie',
//             'slogan': 'Blend in to your crowd',
//             'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
//             'category': 'Jackets',
//             'default_price': '140.00',
//             'created_at': '2021-02-23T05:08:00.350Z',
//             'updated_at': '2021-02-23T05:08:00.350Z',
//             'features': [
//               {
//                 'feature': 'Fabric',
//                 'value': 'Canvas',
//               },
//               {
//                 'feature': 'Buttons',
//                 'value': 'Brass',
//               },
//             ],
>>>>>>> c23b6ba5df1bcb8784d4bcbe674476ae92fe3e5f

//           })
//         );
//       });
//     //length/ ie not empty
//     expect(Object.keys(response.body).length).toBeGreaterThan(0);
//     //ensure request sent with headers-api key
//     expect(axios.get).toHaveBeenCalledWith(
//       options = {
//         headers: {
//           'Authorization': config.GITHUB_API_KEY
//         }
//       }
//     );
//   });
// });
