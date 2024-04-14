import { App } from './app';
import http from 'http';

const appInstance = new App();
export const server = http.createServer(appInstance.server);
