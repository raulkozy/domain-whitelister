import { registerAs } from '@nestjs/config';
import * as env from 'env-var';

export default registerAs('database', () => ({
  database: {
    host: env.get('DATABASE_HOST').required(true).asString(),
    port: env.get('DATABASE_PORT').required(true).asInt(),
    collection: env.get('DATABASE').required(true).asString(),
  },
}));
