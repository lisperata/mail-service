import { Sequelize } from 'sequelize';
import * as dotenv from 'dotenv';

const env = dotenv.config();

const sequelize: Sequelize = new Sequelize(
  process.env.DB_NAME || '',
  process.env.DB_USER || '',
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
  }
);

export default sequelize;
