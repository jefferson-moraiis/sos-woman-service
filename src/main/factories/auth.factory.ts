import { AuthController } from '../controllers'
import { AuthenticationUseCase } from '../../domain/usecases'
import { AuthRepository } from '../../infra/repositories'
import { BcryptAdapter, JwtAdapter } from "../../infra/cryptography";

export const authFactory = () => {
  const userRepository = new AuthRepository()
  const bcryptAdapter = new BcryptAdapter(10)
  const jwtAdapter = new JwtAdapter('keySecret')
  const authUseCase = new AuthenticationUseCase(userRepository, bcryptAdapter, jwtAdapter)
  return new AuthController(authUseCase)
}