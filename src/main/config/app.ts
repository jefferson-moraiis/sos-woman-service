import express from 'express'
import router from './routes'
import bodyParser from "body-parser";
import http from 'http';

export class App {
  private app
  public server

  constructor() {
    this.app = express();
    this.config()
    this.router()
    this.server = http.createServer(this.app)
  }

  public router() {
    router(this.app)
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

