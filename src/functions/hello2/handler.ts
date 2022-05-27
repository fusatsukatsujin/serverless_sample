import type { ValidatedEventAPIGatewayProxyEvent } from '@libs/api-gateway';
import { formatJSONResponse } from '@libs/api-gateway';
import { middyfy } from '@libs/lambda';

const hello2 = async () => {
  return formatJSONResponse({
    message: 'Hello!!',
  });
};

export const main = middyfy(hello2);
