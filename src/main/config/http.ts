import http from 'http';
import { Server } from 'socket.io'
import { App } from './app';
const appInstance = new App();

export const server = http.createServer(appInstance.app);
export const io = new Server(server,{
  cors: {
    origin: "*", // Permite todas as origens
    methods: ["GET", "POST"],
    credentials: true // True se você precisa de cookies, auth headers, etc.
  }
});

