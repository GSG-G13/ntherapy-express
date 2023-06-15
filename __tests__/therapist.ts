
import request from 'supertest';
import app from '.././src/app';
import buildDB from "../src/db/build";
import dbConnection from "../src/db/connection";

beforeAll(buildDB);
afterAll(() => dbConnection.close());

describe('Therapist Route', () => {
    it('should return therapist information when valid ID is provided', async () => {
        const id = '3';

        const response = await request(app).get(`/therapist/${id}`);

        expect(response.status).toBe(200);
        expect(response.body).toEqual({
            data: {
                id: 3,
                cvLink: "https://drive.google.com/file/d/1jthZD5IlhwMn5IBUoQ-IPj3vnsuVsXf9/view?usp=sharing",
                profileImg: "https://www.felixhospital.com/sites/default/files/2022-11/dr-dk-gupta.jpg",
                major: "Nurse Psychotherapist ",
                bio: " registered nurse who is trained in the practice of psychiatric and mental health nursing. Trained to diagnose and provide individual and group counseling. ",
                hourlyRate: 30,
                createdAt: expect.any(String),
                updatedAt: expect.any(String),
                userId: 6,
            },
            message: "success therapist data"
        });
    });

    it('should return 404 when invalid ID is provided', async () => {
        const id = '40';
        const response = await request(app).get(`/therapist/${id}`);
        expect(response.status).toBe(404);
    });
});