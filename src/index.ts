import env from './main/config/env';
import { App } from './main/config/app';
import { MongoClient } from './infra/database/mongo';

const app = new App();
const database = new MongoClient();


(async function () {
  await database.connect(env.uri);
  app.server.listen(env.port, () => {
    console.log(`Server running at http://localhost:${env.port}`);
  });
})();

