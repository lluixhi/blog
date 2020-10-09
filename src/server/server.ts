import "reflect-metadata";
import express from 'express';
import { createConnection } from 'typeorm';
import { UserController } from './controllers';

createConnection().then(connection => { 
    const app: express.Application = express();

    const port: number = Number(process.env.PORT) || 8080;

    app.use(express.static('./build'));

    app.use('/', UserController);

    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
    });
}).catch(error => console.log(error));