import { type UserDTO } from "../../domain/dto";
import { type IUserRepository } from "../../domain/interfaces/user.interface";
import { FirestoreModel } from "../../infra/database";
import { RealtimeDatabaseModel } from "../database/realtime";

export class UserRepository implements IUserRepository {
  private readonly userModel: RealtimeDatabaseModel<UserDTO>;
  // private readonly userModel: FirestoreModel<UserDTO>;


  constructor() {
    this.userModel = new RealtimeDatabaseModel<UserDTO>("USERS");
    // this.userModel = new FirestoreModel<UserDTO>("USERS");

  }

  async createUser(userData: Partial<UserDTO>): Promise<any> {
    return await this.userModel.create(userData);
  }

  async updateUser(
    id: string,
    userData: Partial<UserDTO>
  ): Promise<UserDTO | null> {
    await this.userModel.update(id, { ...userData });
    return await this.findUserById(id);
  }

  async deleteUser(id: string): Promise<void> {
    await this.userModel.delete(id);
  }

  async findUserById(id: string): Promise<UserDTO | null> {
    return await this.userModel.findById(id);
  }

  async findByField(fieldName: string, value: any): Promise<UserDTO | null> {
    return await this.userModel.findByField(fieldName, value);
  }

  async findAllUsers(): Promise<UserDTO[]> {
    return await this.userModel.findAll();
  }
}
