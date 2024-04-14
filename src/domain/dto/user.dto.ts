export class UserDTO {
	readonly id: string;
  readonly documentId: number;
	readonly name: string;
	readonly lastName: string;
	readonly email: string;
	readonly phone: string;
	readonly age: number;
	readonly role: UserRole;
	readonly username: string;
	readonly password: string;

	constructor (
		id: string,
    documentId: number,
		name: string,
		lastName: string,
		email: string,
		phone: string,
		age: number,
		role: UserRole,
		username: string,
		password: string
	) {
		this.id = id;
    this.documentId = documentId
		this.name = name;
		this.lastName = lastName;
		this.email = email;
		this.phone = phone;
		this.age = age;
		this.role = role;
		this.username = username;
		this.password = password;
	}
}
enum UserRole {
  ADMIN = "admin",
  USER = "user",
}
