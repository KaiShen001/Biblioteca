import request from 'supertest';
import chai from 'chai';
import app from '../src/index.js';

const { expect } = chai;

describe('GET /login', () => {
  it('Prueba de reemderizacion de la pagina del LOGIN', (done) => {
    request(app)
      .get('/login')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.contain('Iniciar sesión');
        done();
      });
  });
});
