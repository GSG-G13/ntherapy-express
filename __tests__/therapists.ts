import request from 'supertest';
import app from '.././src/app';
import buildDB from "../src/db/build";
import dbConnection from "../src/db/connection";

beforeAll(buildDB);
afterAll(() => dbConnection.close());

describe('GET /therapists', () => {
  it('should return  list of therapists  on the query ', async () => {
    const response = await request(app).get('/therapists').query({ q: 'Al', page: 0 });
    expect(response.status).toBe(200);
  });
  it('should return  list of the first 8  therapists  on the query ', async () => {
    const response = await request(app).get('/therapists').query({ q: ' ', page: 0 });
    expect(response.status).toBe(200);
  });
});
