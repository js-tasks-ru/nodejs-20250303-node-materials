import { DataSource, DataSourceOptions } from 'typeorm';
import database from '../config/database';

const databaseConfig = database();

export default new DataSource({
  ...(databaseConfig as DataSourceOptions),
  migrations: ['./migrations/*.ts'],
});
