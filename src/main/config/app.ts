import express from 'express'
import router from './routes'
import bodyParser from "body-parser";
import { connect } from './google';

export class App {
  public server

  constructor() {
    this.server = express();
    this.config()
    this.router()
    this.googleConfig()
  }

  public router() {
    router(this.server)
  }

  private config(): void {
    this.server.use(bodyParser.json());
    this.server.use(bodyParser.urlencoded({ extended: false }));
  }

  async googleConfig(){
    await connect().then(()=>{
      console.log("firebase connection established")
    }).catch((error)=>{
      console.log(error)
    })
  }
}
