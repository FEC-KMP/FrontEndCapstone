const supertest = require('supertest');
const axios = require('axios');
const app = require('../server/index.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
const config = require('../server/config.js');


jest.mock('axios');
const request = supertest(app);

describe('Product Details routing', () => {
  test('Should get ONE specific product\'s details', (done) => {
    axios.mockImplementationOnce(() => Promise.resolve({
      data: {
        'id': 18078,
        'campus': 'hr-bld',
        'name': 'Camo Onesie',
        'slogan': 'Blend in to your crowd',
        'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
        'category': 'Jackets',
        'default_price': '140.00',
        'created_at': '2021-02-23T05:08:00.350Z',
        'updated_at': '2021-02-23T05:08:00.350Z',
        'features': [
          {
            'feature': 'Fabric',
            'value': 'Canvas',
          },
          {
            'feature': 'Buttons',
            'value': 'Brass',
          },
        ],
      },
    })
    );

    request.get('/products/18078')
      .then((response) => {
        //1 response code
        expect(response.status).toBe(200);

        //body info/structure
        expect(response.body).toEqual(
          expect.objectContaining({
            'id': 18078,
            'campus': 'hr-bld',
            'name': 'Camo Onesie',
            'slogan': 'Blend in to your crowd',
            'description': 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
            'category': 'Jackets',
            'default_price': '140.00',
            'created_at': '2021-02-23T05:08:00.350Z',
            'updated_at': '2021-02-23T05:08:00.350Z',
            'features': [
              {
                'feature': 'Fabric',
                'value': 'Canvas',
              },
              {
                'feature': 'Buttons',
                'value': 'Brass',
              },
            ],

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
