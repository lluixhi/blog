import express from 'express';

import { ApiController, WelcomeController } from './controllers';

const app: express.Application = express();

const port: number = Number(process.env.PORT) || 3000;

app.use('/', WelcomeController);

app.use('/api', ApiController);

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});