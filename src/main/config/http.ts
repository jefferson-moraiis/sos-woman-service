import http from 'http';
import { Server } from 'socket.io'
import { App } from './app';
const app = new App();

export const server = http.createServer(app.server);
export const io = new Server(server);