import { NextFunction, Request, Response } from 'express'
import { UserRepository } from '../../infra/repositories';
import * as admin from 'firebase-admin';

const customerRepository = new UserRepository()

declare global {
	namespace Express {
			interface Request {
					user?:any;
			}
	}
}

export const authMiddleware = async (
	req,
	res,
	next
) => {
  const token = req.headers.authorization?.split('Bearer ')[1];

  if (token) {
    try {
      const { authorization } = req.headers
      const token = authorization?.split(' ')[1]
      const customer = await admin.auth().verifyIdToken(token);
      console.log("🚀 ~ customer:", customer)
      req.user = await customerRepository.findUserById(customer.uid)
    } catch (error) {
      res.status(401).json({message:'Not Authorized'});
    }
  }
  next()
}