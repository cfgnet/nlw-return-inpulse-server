import nodemailer from 'nodemailer';

import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "c511fed16bbe46",
    pass: "9a6c122e522d2e"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail ({ subject, body }: SendMailData)  {
    await  transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Dev <dev@sdcnet.com.br>',
      subject,
      html: body,
    });
  }
}