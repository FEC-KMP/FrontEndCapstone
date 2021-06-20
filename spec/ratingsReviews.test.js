const supertest = require('supertest');
const axios = require('axios');
const app = require('../server/index.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
const config = require('../server/config.js');


jest.mock('axios');
const request = supertest(app);

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

    request.get('/reviews/meta')
      .then((response) => {
        //1 response code
        expect(response.status).toBe(200);

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



          })
        );
      });
    //length/ ie not empty
    expect(Object.keys(response.body).length).toBeGreaterThan(0);
    //ensure request sent with headers-api key
    expect(axios.get).toHaveBeenCalledWith(
      options = {
        headers: {
          'Authorization': config.GITHUB_API_KEY
        }
      }
    );
  });
});
