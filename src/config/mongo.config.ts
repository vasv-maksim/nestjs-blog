import { ConfigService } from '@nestjs/config';
import { TypegooseModuleOptions } from 'nestjs-typegoose';

export const getMongoConfig = async (
  configService: ConfigService,
): Promise<TypegooseModuleOptions> => {
  return {
    uri: getMongoUri(configService),
    ...getMongoOptions(),
  };
};

const getMongoUri = (configService: ConfigService): string => {
  const login = configService.get('MONGO_LOGIN');
  const password = configService.get('MONGO_PASSWORD');
  const host = configService.get('MONGO_HOST');
  const port = configService.get('MONGO_PORT');
  const authDb = configService.get('MONGO_AUTH_DB');

  const connectionString = `mongodb://${login}:${password}@${host}:${port}/${authDb}`;
  return connectionString;
};

const getMongoOptions = () => ({
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
