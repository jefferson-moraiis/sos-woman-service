import { NextFunction, Request, Response } from 'express'
import { JwtAdapter } from '../../infra/cryptography'
import { UserRepository } from '../../infra/repositories';

const encrypted = new JwtAdapter('keySecret')
const customerRepository = new UserRepository()

declare global {
	namespace Express {
			interface Request {
					user?:any;
			}
	}
}

export const authMiddleware = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	try {
		const { authorization } = req.headers
		const token = authorization?.split(' ')[1]
		const customer = await encrypted.decrypt(token)
		await customerRepository.findUserById(customer.id)

		req.user = customer
		next()
	} catch (error) {
		res.status(401).json({message:'Not Authorized'});
	}
}