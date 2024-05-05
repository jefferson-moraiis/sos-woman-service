
import { Router } from 'express'
import { userFactory } from '../factories/user.factory'
import { authMiddleware } from '../middleware/auth.middleware'


export default (router: Router): void => {
  router.post("/user",authMiddleware,(req,res)=> userFactory().createUser(req,res))
  router.get("/user",authMiddleware,(req,res)=> userFactory().getUser(req,res))
  router.get("/user/:id",authMiddleware,(req,res)=> userFactory().getUserById(req,res))
  router.get("/user/:cpf",(req,res)=> userFactory().getUserByDocumentId(req,res))
  router.get("/user",authMiddleware,(req,res)=> userFactory().getAllUsers(req,res))
  router.put("/user/:id",authMiddleware,(req,res)=> userFactory().updateUser(req,res))
  router.delete("/user/:id",authMiddleware,(req,res)=> userFactory().deleteUser(req,res))
}