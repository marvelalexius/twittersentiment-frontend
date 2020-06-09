import socketIOClient from 'socket.io-client';

export default class {
  constructor() {
    const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:3000';
    this.socket = null;
    this.baseUrl = baseUrl;
  }

  connect = registerHandlers => {
    this.socket = socketIOClient(this.baseUrl);

    this.socket.on('connect', () => console.log('Socket connected.'));

    if (registerHandlers) {
      registerHandlers(this.socket);
    } else {
      this.registerHandlers();
    }
  }

  registerHandlers = () => {
    this.socket.on('disconnect', () => {
      if (this.socket) {
        this.socket.removeAllListeners();
        this.socket.close(true);
      }
      console.log('Socket disconnected.');
    })
  }
};
