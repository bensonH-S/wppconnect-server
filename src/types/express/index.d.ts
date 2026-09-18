import { Socket } from 'socket.io';
import { Logger } from 'winston';

import { ServerOptions } from '../ServerOptions';
import { WhatsAppServer } from '../WhatsAppServer';

// to make the file a module and avoid the TypeScript error
export {};

declare global {
  namespace Express {
    export interface Request {
      client: WhatsAppServer;
      logger: Logger;
      session: string;
      token?: string;
      io: Socket;
      serverOptions: ServerOptions;
    }
  }
}
