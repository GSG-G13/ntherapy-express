import nodemailer from 'nodemailer';
import config from '../config';

const { MAILER: { user, pass } } = config;

const mailer = async (info: any) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 587,
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
