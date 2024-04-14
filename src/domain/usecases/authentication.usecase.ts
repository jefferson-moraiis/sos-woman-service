import { BcryptAdapter, JwtAdapter } from "@/infra/cryptography";
import { type AuthRepository } from "@/infra/repositories";

export class AuthenticationUseCase {
	private readonly authRepository: AuthRepository;
	private readonly crypt: BcryptAdapter;
	private readonly encrypter: JwtAdapter;

	constructor (authRepository: AuthRepository, crypt: BcryptAdapter, encrypter: JwtAdapter) {
		this.authRepository = authRepository;
		this.crypt = new BcryptAdapter(10);
		this.encrypter = new JwtAdapter("keySecret");
	}

	async authenticateUser (email: string, password: string) {
		const user = await this.authRepository.getUserByEmail(email);
		if (!user) return false;
		const isValid = await this.crypt.compare(password, user.password);
		if (!isValid) return false;
		const token = await this.encrypter.encrypt(user.id);
		return token;
	}
}
