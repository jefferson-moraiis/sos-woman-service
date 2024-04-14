
import { Router } from 'express'
import { userFactory } from '../factories/user.factory'

export default (router: Router): void => {
  router.post("/user",(req,res)=> userFactory().createUser(req,res))
  router.get("/user/:id",(req,res)=> userFactory().getUserById(req,res))
  router.get("/user",(req,res)=> userFactory().getAllUsers(req,res))
  router.put("/user/:id",(req,res)=> userFactory().updateUser(req,res))
  router.delete("/user/:id",(req,res)=> userFactory().deleteUser(req,res))
}