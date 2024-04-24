import http from 'http';
import { Server } from 'socket.io'
import { App } from './app';
const appInstance = new App();

export const server = http.createServer(appInstance.app);
export const io = new Server(server);

