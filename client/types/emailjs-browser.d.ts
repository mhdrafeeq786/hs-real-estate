declare module '@emailjs/browser' {
  export function init(userId: string): void;
  export function send(serviceId: string, templateId: string, templateParams: any, publicKey?: string): Promise<any>;
  export default {
    init: init,
    send: send,
  };
}
