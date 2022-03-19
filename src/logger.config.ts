import { v4 as uuidV4 } from 'uuid';
import { Params as PinoParams } from 'nestjs-pino';
import { REQUEST_ID_HEADER } from './constants';

const IS_DEV = process.env.NODE_ENV;

export const LoggerConfig: PinoParams = {
  pinoHttp: {
    level: IS_DEV ? 'debug' : 'info',
    autoLogging: false,
    genReqId: function (req) {
      // Get request ID from headers or generate a uuid with svc-g-* prefix for filtering in future investigations
      return req.headers[REQUEST_ID_HEADER] || `svc-g-${uuidV4()}`;
    },
  },
};
