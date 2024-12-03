import { SequelizeModuleOptions } from '@nestjs/sequelize';
import {config} from 'dotenv';

config();

export const dataBaseConfig: SequelizeModuleOptions = {
  dialect: 'sqlite',
  storage: process.env.DATABASE_FILE || '.db/data.sqlite3',
  autoLoadModels: true,
  synchronize: true,
};
