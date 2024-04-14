export class FirebaseUserDTO {
	readonly uid: string;
	readonly email: string;
	readonly displayName: string;
	readonly photoURL: string;
	readonly phoneNumber: string;
	readonly disabled: boolean;
	readonly emailVerified: boolean;
	readonly metadata: {
    creationTime: string
    lastSignInTime: string
    lastRefreshTime?: string
  };

	readonly providerData: {
    uid: string
    displayName: string
    email: string
    photoURL: string
    providerId: string
    phoneNumber: string
  };

	constructor (
		uid: string,
		email: string,
		displayName: string,
		photoURL: string,
		phoneNumber: string,
		disabled: boolean,
		emailVerified: boolean,
		metadata: {
      creationTime: string
      lastSignInTime: string
      lastRefreshTime?: string
    },
		providerData: {
      uid: string
      displayName: string
      email: string
      photoURL: string
      providerId: string
      phoneNumber: string
    }
	) {
		this.uid = uid;
		this.email = email;
		this.displayName = displayName;
		this.photoURL = photoURL;
		this.phoneNumber = phoneNumber;
		this.disabled = disabled;
		this.emailVerified = emailVerified;
		this.metadata = metadata;
		this.providerData = providerData;
	}
}
