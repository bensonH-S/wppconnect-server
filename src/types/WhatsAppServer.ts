import { Whatsapp } from '@wppconnect-team/wppconnect';

export interface WhatsAppServer extends Whatsapp {
  urlcode: string;
  status: string;
  qrcode?: string;
  phoneCode?: string;
  phone?: string;
  pupBrowser?: { close: () => Promise<unknown> };
  browser?: { close: () => Promise<unknown> };
}
