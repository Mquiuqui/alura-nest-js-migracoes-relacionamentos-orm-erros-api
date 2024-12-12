/* eslint-disable prettier/prettier */
import 'dotenv/config';
import { DataSource, DataSourceOptions } from 'typeorm';
const dataSourceOptions: DataSourceOptions = {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: 'root',
    database: process.env.DB_NAME,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    migrations: [__dirname + '/migrations/*.{js,ts}']
};
console.log(__dirname)
const dataSource = new DataSource(dataSourceOptions)

export default dataSource