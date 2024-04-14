import { type FirebaseUserDTO } from "../dto";

export interface IAuthRepository {
  createUser: (newUser: FirebaseUserDTO) => Promise<FirebaseUserDTO>
  getAuthUserById: (id: string) => Promise<FirebaseUserDTO | null>
  getUserByEmail: (email: string) => Promise<FirebaseUserDTO | null>
  updateAuthUser: (user: FirebaseUserDTO) => Promise<FirebaseUserDTO>
  deleteAuthUser: (uid: string) => Promise<void>
}
