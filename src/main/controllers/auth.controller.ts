import { type Request, type Response } from "express";
import { type AuthenticationUseCase } from "../../domain/usecases";

export class AuthController {
  constructor(private readonly authUseCase: AuthenticationUseCase) {}

  async login(req: Request, res: Response): Promise<void> {
    try {
      const { email, password } = req.body;
      const authUser = await this.authUseCase.authenticateUser(email, password);
      res.status(200).json(authUser);
    } catch (error: any) {
      res.status(400).json({ error: error.message });
    }
  }
}