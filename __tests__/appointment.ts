import request from 'supertest';
import app from '.././src/app';

const appointmentRouteTest = () => {
    it('Should return a Success Response with 200 status and result attributes',async () => {
  
        const response = await request(app).get(`/api/v1/appointments/4?date=2023-06-18`);
      
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            "data": [
                {
                    "id": 16,
                    "datetime": "2023-06-18T08:00:00.000Z",
                    "therapistId": 4,
                    "isBooked": false,
                    "isAvailable": true
                },
                {
                    "id": 17,
                    "datetime": "2023-06-18T09:00:00.000Z",
                    "therapistId": 4,
                    "isBooked": false,
                    "isAvailable": true
                },
                {
                    "id": 18,
                    "datetime": "2023-06-18T10:00:00.000Z",
                    "therapistId": 4,
                    "isBooked": false,
                    "isAvailable": true
                },
                {
                    "id": 19,
                    "datetime": "2023-06-18T11:00:00.000Z",
                    "therapistId": 4,
                    "isBooked": false,
                    "isAvailable": true
                },
                {
                    "id": 20,
                    "datetime": "2023-06-18T12:00:00.000Z",
                    "therapistId": 4,
                    "isBooked": false,
                    "isAvailable": true
                }
            ],
            "message": "appointment successful"
        });
      })
    
      it('Should return a FAIL Response with 200 status and result attributes',async () => {
        const response = await request(app).get(`/api/v1/appointments/4?date=2023-06-17`);
      
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            "data": [],
            "message": "sorry but no appointments found"
      });
      })
    it('Should return This appointment is booked with status 400', async () => {
        const id = '1';
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidGhlcmFwaXN0IiwidXNlcklkIjoiNSIsInRoZXJhcGlzdElkIjoiMiJ9.gGlnqHx0QN93rw87HdavQH-QN1kA3mQ6yALwl9M2L_w';

        const response = await request(app)
            .put(`/api/v1/appointments/${id}`)
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(400);
        expect(response.body).toEqual({
            message: 'this appointment is booked'
        });
    });
    it('Should return update Available successful with status 200', async () => {
        const id = '9';
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidGhlcmFwaXN0IiwidXNlcklkIjoiNSIsInRoZXJhcGlzdElkIjoiMiJ9.gGlnqHx0QN93rw87HdavQH-QN1kA3mQ6yALwl9M2L_w';

        const response = await request(app)
            .put(`/api/v1/appointments/${id}`)
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            data: [1],
            message: 'update Available successful'
        });
    });
    it('Should return  Unauthorized if Therapist doesn’t own the appointment  and return  status 401', async () => {
        const id = '11';
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoidGhlcmFwaXN0IiwidXNlcklkIjoiNSIsInRoZXJhcGlzdElkIjoiMiJ9.gGlnqHx0QN93rw87HdavQH-QN1kA3mQ6yALwl9M2L_w';

        const response = await request(app)
            .put(`/api/v1/appointments/${id}`)
            .set('Authorization', `Bearer ${token}`);

        expect(response.status).toBe(401);
        expect(response.body).toEqual({
            message: 'Unauthorized '
        });
    });
}

export default appointmentRouteTest