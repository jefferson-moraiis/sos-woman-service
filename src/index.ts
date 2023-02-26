import env from './main/config/env';
import { server } from './main/config/http';
import { MongoClient } from './infra/database/mongo';
import './main/sockets/devices.sockets'

const database = new MongoClient();

(async function () {
  await database.connect(env.uri);
  server.listen(env.port, () => {
    console.log(`Server running at http://localhost:${env.port}`);
  });
})();

