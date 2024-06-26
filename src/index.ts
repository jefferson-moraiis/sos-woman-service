import env from './main/config/env';
import { server } from './main/config/http';
import './main/sockets/routes.sockets'

(async function () {
  server.listen(env.port, () => {
    console.log(`Server running at http://localhost:${env.port}`);
  });
})();
