import request from 'supertest';
import app from '.././src/app';
import config from '../src/config';

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
        const response = await request(app).get('/api/v1/therapists').query({ q: 'Al', page: 1 });
        expect(response.status).toBe(200);
    });
    it('should return  list of the first 8  therapists  on the query ', async () => {
        const response = await request(app).get('/api/v1/therapists').query({ q: '', page: 1 });
        expect(response.status).toBe(200);
    });
    it('should return Page number should be a valid number ', async () => {
        const response = await request(app).get('/api/v1/therapists').query({ q: '', page: "M" });
        expect(response.status).toBe(400);
    });
    it('Should return Successful when the user is a therapist', async () => {
        const token = config.TOKEN_TEST_THERAPIST;
        const response = await request(app)
        .patch(`/api/v1/therapists`)
        .set('Authorization', `Bearer ${token}`)
        .set('Content-type', 'application/json')
        .send({fullName: 'Mohannad abu. Yazeed'});
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            "data": null,
            "message": "Successful update"
        })
    })
    
    it('Should return Successful when the user is a therapist with no records updated', async () => {
        const token = config.TOKEN_TEST_THERAPIST;
        const response = await request(app)
        .patch(`/api/v1/therapists`)
        .set('Authorization', `Bearer ${token}`)
        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            "data": null,
            "message": "No Records Updated"
        })
    })
    
    it('Should return failed when the user is  not therapist', async () => {
        
        const response = await request(app) 
        .patch(`/api/v1/therapists`)
        .send({fullName: 'Mohannad Sabe'});
        expect(response.status).toBe(401);
        expect(response.body).toEqual({
            "message": "Unauthorized"
        })
    })
    
}

export default therapistTest;


