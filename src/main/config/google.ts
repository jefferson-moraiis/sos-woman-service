import * as admin from 'firebase-admin';
import path from 'path';


export async function connect(){
     await admin.initializeApp({
        credential: admin.credential.cert(path.resolve(
          __dirname,'../../credentials.json'
        )),
        databaseURL: 'https://sos-woman-ad3d9-default-rtdb.firebaseio.com' //'https://sos-woman-dev.firebaseapp.com'
      })
}