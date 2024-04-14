import { type UserUseCase } from "../../domain/usecases/user.usecases";
import { type Request, type Response } from "express";

export class UserController {
	constructor (private readonly user: UserUseCase) {}

	async createUser (req: Request, res: Response) {
		try {
			const user = await this.user.createUser(req.body);
			res.status(201).json(user);
		} catch (error: any) {
			res.status(400).json({ error: error.message });
		}
	}

	async updateUser (req: Request, res: Response) {
		try {
			const user = await this.user.updateUser(req.params.id, req.body);
			if (!user) return res.status(404).json({ error: "User not found" });
			res.status(200).json(user);
		} catch (error: any) {
			res.status(400).json({ error: error.message });
		}
	}

	async getUserById (req: Request, res: Response) {
		try {
			const user = await this.user.getUserById(req.params.id);
			if (!user) return res.status(404).json({ error: "User not found" });
			res.status(200).json(user);
		} catch (error: any) {
			res.status(400).json({ error: error.message });
		}
	}

	async getAllUsers (req: Request, res: Response) {
		try {
			const users = await this.user.getAllUsers();
			res.status(200).json(users);
		} catch (error: any) {
			res.status(400).json({ error: error.message });
		}
	}

	async deleteUser (req: Request, res: Response) {
		try {
			await this.user.deleteUser(req.params.id);
			res.status(200).json({ message: "User deleted" });
		} catch (error: any) {
			res.status(400).json({ error: error.message });
		}
	}

}
