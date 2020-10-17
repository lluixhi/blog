import { ConnectionOptions } from 'typeorm';

const ormConfig: ConnectionOptions = {
    "type": "postgres",
    "host": process.env.ENDPOINT || "localhost",
    "username": process.env.USERNAME || "admin",
    "password": process.env.PASSWORD || "test",
    "database": process.env.DBNAME || "blog",
    "entities": ["entities/**/*.ts"],
    "logging": true,
    "synchronize": true
};

export default ormConfig;
