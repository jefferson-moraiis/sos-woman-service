import { Router } from 'express'
import { authFactory } from '../factories';

export default (router: Router): void => {
  router.post("/login",(req,res)=> authFactory().login(req,res))
}