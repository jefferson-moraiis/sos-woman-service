import env from './main/config/env';
import { App } from './main/config/app';

new App().server.listen(env.port, () =>
  console.log(`Server running at http://localhost:${env.port}`
  ),
);
