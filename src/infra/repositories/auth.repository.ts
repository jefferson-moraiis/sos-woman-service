import { type FirebaseUserDTO } from "../../domain/dto";
import { type IAuthRepository } from "../../domain/interfaces/auth.interface";
import { FirebaseAuthModel } from "../database";

export class AuthRepository implements IAuthRepository {
	private readonly authService: FirebaseAuthModel;

	constructor () {
		this.authService = new FirebaseAuthModel();
	}

	async createUser (userData: FirebaseUserDTO): Promise<FirebaseUserDTO> {
		const newUser = await this.authService.createUser(userData);
		return newUser;
	}

	async getAuthUserById (id: string): Promise<any | null> {
		const userRecord = await this.authService.getAuthUserById(id);
		return userRecord;
	}

	async getUserByEmail (email: string): Promise<any | null> {
		const userRecord = await this.authService.getUserByEmail(email);
		return userRecord;
	}

	async updateAuthUser (user: FirebaseUserDTO): Promise<any | null> {
		await this.authService.updateAuthUser(user);
	}

	async deleteAuthUser (uid: string): Promise<void> {
		await this.authService.deleteAuthUser(uid);
	}

}
