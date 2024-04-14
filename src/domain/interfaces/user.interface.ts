import { type UserDTO } from "../dto";
import { type auth } from "firebase-admin";

export interface IUserRepository {
  createUser: (userData: Partial<UserDTO>) => Promise<auth.UserRecord>
  updateUser: (id: string, userData: Partial<UserDTO>) => Promise<UserDTO | null>
  deleteUser: (id: string) => Promise<void>
  findUserById: (id: string) => Promise<UserDTO | null>
  findAllUsers: () => Promise<UserDTO[] | null>
}
