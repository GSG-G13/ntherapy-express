import nodemailer, { SendMailOptions } from 'nodemailer';
import config from '../config';

const { MAILER: { user, pass } } = config;

const mailer = async (info:SendMailOptions) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: false,
    auth: {
      user,
      pass,
    },
  });
  const email = await transporter.sendMail(info);

  return email;
};

export default mailer;
