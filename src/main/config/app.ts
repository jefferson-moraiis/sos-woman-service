import express from 'express'
import router from './routes'
import bodyParser from "body-parser";
import http from 'http';
import { connect } from './google';
import cors from 'cors';


export class App {
  public app
  public server

  constructor() {
    this.app = express();
    this.config()
    this.router()
    this.googleConfig()
    this.server = http.createServer(this.app)
  }

  public router() {
    router(this.app)
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  async googleConfig(){
    await connect().then(()=>{
      console.log("firebase connection established")
    }).catch((error)=>{
      console.log(error)
    })
  }
}

