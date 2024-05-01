import { UserDTO } from "@/domain/dto";
import * as admin from "firebase-admin";

export class RealtimeDatabaseModel<T> {
    private readonly ref: admin.database.Reference;

    constructor (collectionName: string) {
        this.ref = admin.database().ref(collectionName);
    }

    async create(data: Partial<UserDTO>): Promise<void> {
      const id = data.id;
      // Clonamos o objeto para evitar modificar o original ao excluir 'id'
      const dataToSave = { ...data };
      delete dataToSave.id;  // Removemos 'id' para não salvar no mesmo nível dos outros dados
      await this.ref.child(id).set(dataToSave);
  }

    async findAll (): Promise<T[]> {
        const snapshot = await this.ref.once("value");
        const data = snapshot.val();
        if (data) {
            return Object.keys(data).map(key => data[key]) as T[];
        }
        return [];
    }

    async findById (docId: string): Promise<T | null> {
        const snapshot = await this.ref.child(docId).once("value");
        const data = snapshot.val();
        return data ? data as T : null;
    }

    async findByField(fieldName: string, value: any): Promise<T[] | null > {
        const allData = await this.findAll();
        return allData.filter(item => item[fieldName] === value);
    }

    async update (docId: string, data: Partial<T>): Promise<void> {
        await this.ref.child(docId).update(data);
    }

    async delete (docId: string): Promise<void> {
        await this.ref.child(docId).remove();
    }
}
