import request from 'supertest';
import app from '../App';

describe('Testing server. Response codes 200',() => {
  test('Expect 200 code', done => {
    request(app).get('/').then((response) => {
      expect(response.status).toBe(200);
      done();
    })
  })

  test('Expect 200 code and true status', done => {
    request(app).get('/').then((response) => {
      expect(response.status).toBe(200);
      expect(response.body.message).toBeTruthy();
      done();
    })
  })

  test('Expect 404 code and true status', done => {
    request(app).get('/error').then((response) => {
      //console.log(response)
      expect(response.status).toBe(404);
      done();
    })
  })
})