import path from 'path';
import express, {Request, Response} from 'express';

import { ApiController } from './api';

const app: express.Application = express();

const port: number = Number(process.env.PORT) || 8080;

app.use(express.static('./build'));

app.use('/api', ApiController);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});