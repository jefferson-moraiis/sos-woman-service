import { auth } from "firebase-admin";

export class FirebaseAuthModel {
	async createUser (newUser: auth.CreateRequest): Promise<any> {
		const userRecord = await auth().createUser({ ...newUser });
		return userRecord;
	}

	async getAuthUserById (id: string): Promise<auth.UserRecord | null> {
		const userRecord = await auth().getUser(id);
		return userRecord;
	}

	async getUserByEmail (email: string): Promise<auth.UserRecord | null> {
		const userRecord = await auth().getUserByEmail(email);
		return userRecord;
	}

	async updateAuthUser (user: auth.UpdateRequest & { uid: string }): Promise<void> {
		await auth().updateUser(user.uid, { ...user });
	}

	async deleteAuthUser (uid: string): Promise<void> {
		await auth().deleteUser(uid);
	}

}
