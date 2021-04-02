import "reflect-metadata";
import { createConnection } from 'typeorm';
import express from 'express';
import cookieParser from 'cookie-parser';

import { AuthRoute, UsersRoute } from './routes';
import ormConfig from '../../ormconfig';

createConnection(ormConfig).then(connection => { 
    const app: express.Application = express();

    const port: number = Number(process.env.PORT) || 8080;

    app.use(express.json());
    app.use(express.urlencoded({
        extended: true
    }));
    app.use(cookieParser());

    app.use(express.static('./build'));

    app.use('/api', UsersRoute);
    app.use('/api', AuthRoute);

    app.listen(port, () => {
        console.log(`Listening at http://localhost:${port}`);
    });
}).catch(error => console.log(error));
