export class UserDTO {
	readonly id: string;
  readonly documentId: number;
	readonly name: string;
	readonly lastName: string;
	readonly email: string;
	readonly phone: string;
	readonly dateOfBirth: Date;
	readonly role: UserRole;
	readonly password: string;

	constructor (
		id: string,
    documentId: number,
		name: string,
		lastName: string,
		email: string,
		phone: string,
		dateOfBirth: Date,
		role: UserRole,
		password: string
	) {
		this.id = id;
    this.documentId = documentId
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.dateOfBirth = dateOfBirth;
		this.role = role;
		this.password = password;
	}
}
enum UserRole {
  ADMIN = "admin",
  USER = "user",
}
