import { join } from 'path';
import { ApolloDriver } from '@nestjs/apollo';
import { HttpContext } from './types';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const graphqlConfig = {
  driver: ApolloDriver,
  autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
  context: ({ req, res }): HttpContext => ({ req, res }),
};

const typeOrmConfig = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  password: process.env.DB_PASSWORD || 'postgres',
  username: process.env.DB_USERNAME || 'postgres',
  entities: [],
  database: process.env.DB_NAME || 'websab',
  synchronize: true,
  logging: true,
} as TypeOrmModuleOptions;

export { graphqlConfig, typeOrmConfig };
