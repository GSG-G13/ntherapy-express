import request from 'supertest';
import app from '.././src/app';
import connection from '../src/db/connection'
import buildb from '../src/db/build'


beforeAll(buildb);
afterAll(() => connection.close())

 describe('GET appointment Router with therapist id and appointments date', () => {
  it('Should return a Success Response with 200 status and result attributes',async () => {
  
    const response = await request(app).get(`/appointments/4?date=2023-06-18`);
  
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      'data': [
          {
              'id': 16,
              'datetime': '2023-06-18T08:00:00.000Z',
              'therapistId': 4
          },
          {
              'id': 17,
              'datetime': '2023-06-18T09:00:00.000Z',
              'therapistId': 4
          },
          {
              'id': 18,
              'datetime': '2023-06-18T10:00:00.000Z',
              'therapistId': 4
          },
          {
              'id': 19,
              'datetime': '2023-06-18T11:00:00.000Z',
              'therapistId': 4
          },
          {
              'id': 20,
              'datetime': '2023-06-18T12:00:00.000Z',
              'therapistId': 4
          }
      ],
      'message': 'OK!'
  });
  })

  it('Should return a FAIL Response with 500 status and result attributes',async () => {
    const response = await request(app).get(`/appointments/5?date=2023-06-18`);
  
    expect(response.status).toBe(500);
    expect(response.body).toEqual({
      'message': 'Server Error'
  });
  })
});

