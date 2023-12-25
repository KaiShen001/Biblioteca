import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/index.js'; 

chai.use(chaiHttp);
const expect = chai.expect;

describe('Estado de la página /lista', () => {
  it('Prueba de ESTADO deveria devolver "Lista de libros"', (done) => {
    chai.request(app)
      .get('/lista')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.text).to.contain('Lista de libros'); 
        done();
      });
  });
});
