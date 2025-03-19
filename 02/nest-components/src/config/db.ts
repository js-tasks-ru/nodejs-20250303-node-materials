import { registerAs } from '@nestjs/config';

export default registerAs('db', () => ({
  type: 'sqlite',
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
}));
