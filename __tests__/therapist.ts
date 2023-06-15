
import request from 'supertest';
import app from '.././src/app';
import buildDB from "../src/db/build";
import dbConnection from "../src/db/connection";

beforeAll(buildDB);
afterAll(() => dbConnection.close());

describe('Therapist Route', () => {
    it('should return therapist information when valid ID is provided', async () => {
        const id = '3';

        const response = await request(app).get(`/api/v1/therapist/${id}`);

        expect(response.status).toBe(200);
        expect(response.body.data.userId).toBe(6);
    });

    it('should return 404 when invalid ID is provided', async () => {
        const id = '40';
        const response = await request(app).get(`/api/v1/therapist/${id}`);
        expect(response.status).toBe(404);
    });
});