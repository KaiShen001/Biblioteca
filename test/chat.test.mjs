import { expect } from 'chai';
import { io, server } from '../src/index.js';
import ioClient from 'socket.io-client';

describe('Chat Events', function () {
  let socket;

  before(function (done) {
    socket = ioClient.connect('http://localhost:3000', {
      'reconnection delay': 0,
      'reopen delay': 0,
      'force new connection': true,
      transports: ['websocket'],
    });
    socket.on('connect', function () {
      done();
    });
  });

  after(function (done) {
    if (socket && socket.connected) {
      socket.disconnect();
    }
    server.close(function () {
      done();
    });
  });

  it('Prueba de Evento de chat de mensajes', function (done) {
    socket.emit('set username', 'testUser');
    socket.on('user joined', function (data) {
      expect(data.username).to.equal('testUser');
      socket.emit('chat message', 'Hello, World!');
    });
    
    socket.on('chat message', function (data) {
      expect(data.username).to.equal('testUser');
      expect(data.msg).to.equal('Hello, World!');
      done();
    });
  });
});
