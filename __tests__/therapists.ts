import request from 'supertest';
import app from '.././src/app';

const therapistTest = () => {
    it('should return therapist information when valid ID is provided', async () => {
        const id = '3';
        const response = await request(app).get(`/api/v1/therapists/${id}`);
        expect(response.status).toBe(200);
        expect(response.body.data.userId).toBe(6);
    });


    it('should return 404 when invalid ID is provided', async () => {
        const id = '40';
        const response = await request(app).get(`/api/v1/therapists/${id}`);
        expect(response.status).toBe(404);
    });

    it('check if therapist is not Active return 404 not found ',async () => {
        const id = '1';
        const response = await request(app).get(`/api/v1/therapists/${id}`);
        expect(response.status).toBe(404);
    });

    it('should return  list of therapists  on the query ', async () => {
        const response = await request(app).get('/api/v1/therapists').query({ q: 'Al', page: 0 });
        expect(response.status).toBe(200);
    });
    it('should return  list of the first 8  therapists  on the query ', async () => {
        const response = await request(app).get('/api/v1/therapists').query({ q: ' ', page: 0 });
        expect(response.status).toBe(200);
    });
}

export default therapistTest;


