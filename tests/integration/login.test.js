const request = require('supertest');
const { app } = require('../../app.js');

describe('POST /login', () => {
    it('should return status code 200 and success message for valid email and password', async () => {
        const response = await request(app)
            .post('/login')
            .send({ email: 'test@example.com', password: 'password123' });
        expect(response.status).toBe(200);
        expect(response.body.message).toEqual('User logged in successfully !');
    });
    it('should return status code 400 and error message for invalid email or invalid password', async () => {
        const response = await request(app)
            .post('/login')
            .send({ email: 'test@example.com', password: 'passwor' });
        expect(response.status).toBe(400);
        expect(response.body.message).toEqual('Invalid email or password');
    });
});
