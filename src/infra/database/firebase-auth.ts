import * as admin from 'firebase-admin';
import { UserDTO } from '../../domain/dto';

export default class FirebaseAuthService {

  async createUserAuth(userData: Partial<UserDTO>): Promise<string> {
    try {
      const userRecord = await admin.auth().createUser({
        email: userData.email,
        password: userData.password,
      });

      return userRecord.uid;
    } catch (error:any) {
      throw new Error(`Error creating user: ${error.message}`);
    }
  }

  async verifyIdToken(token: string): Promise<admin.auth.DecodedIdToken> {
    try {
      const decodedToken = await admin.auth().verifyIdToken(token);
      return decodedToken;
    } catch (error:any) {
      throw new Error(`Erro ao verificar token de ID do usuário: ${error.message}`);
    }
  }
}

