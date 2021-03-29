import io from 'socket.io-client';

import { BASE_URL } from '../config';

let socket = null;
const connectSocket = () => {
  socket = io(BASE_URL, { transports: ['websocket'] });
};

export { connectSocket, socket };
