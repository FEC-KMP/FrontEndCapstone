
const supertest = require('supertest');
const axios = require('axios');
const app = require('../server/index.js');
const app = require('../server/server.js');
const url = 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-bld';
const config = require('../server/config.js');


jest.mock('axios');
const request = supertest(app);

describe('Questions routing', () => {
  test('Should get ', (done) => {
    axios.mockImplementationOnce(() => Promise.resolve({
      data: {
        // eslint-disable-next-line camelcase
        product_id: 18078,
        results: [{}]
      },
    })
    );

    request.get('qa/questions?product_id=18078')
      .then((response) => {
        //1 response code
        expect(response.status).toBe(200);

        //body info/structure
        expect(response.body).toEqual(
          expect.objectContaining({
            results: expect.any(Array)
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
