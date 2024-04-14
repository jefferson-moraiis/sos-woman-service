import * as admin from "firebase-admin";

export class FirestoreModel<T> {
	private readonly collection: admin.firestore.CollectionReference;

	constructor (collectionName: string) {
		this.collection = admin.firestore().collection(collectionName);
	}

	async create (data: admin.firestore.WithFieldValue<admin.firestore.DocumentData>): Promise<admin.firestore.DocumentSnapshot> {
		const docRef = this.collection.doc(data.id);
		await docRef.set({ ...data });
		const docSnapshot = await docRef.get();
		return docSnapshot;
	}

	async findAll (): Promise<T[]> {
		const querySnapshot = await this.collection.get();
		const documents: T[] = [];
		querySnapshot.forEach((doc) => {
			documents.push(doc.data() as T);
		});
		return documents;
	}

	async findById (docId: string): Promise<T | null> {
		try {
			const doc = await this.collection.doc(docId).get();
			return doc.data() as T;
		} catch (error) {
			console.error(error);
			throw error;
		}
	}

	async update (docId: string, data: Partial<T>): Promise<void> {
		await this.collection.doc(docId).update(data);
	}

	async delete (docId: string): Promise<void> {
		await this.collection.doc(docId).delete();
	}
}
