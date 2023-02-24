import mongoose from 'mongoose';

export class MongoClient {

    async connect(uri: string): Promise<void> {
        mongoose.set("strictQuery", false);
        await mongoose.connect(uri).then(() => {
            console.log(`Database connection established`);
        }).catch((err) => {
            console.log(`Database connection failed: ${err}`);
        })
    }

}