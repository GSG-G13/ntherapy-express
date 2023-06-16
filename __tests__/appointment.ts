import request from 'supertest';
import app from '.././src/app';

const appointmentRouteTest = () => {
    it('Should return a Success Response with 200 status and result attributes',async () => {
  
        const response = await request(app).get(`/appointments/4?date=2023-06-18`);
      
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
        const response = await request(app).get(`/appointments/4`);
      
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            "data": [],
            "message": "sorry but no appointments found"
      });
      })
}

export default appointmentRouteTest