import Mailgen from 'mailgen';
import { IMailBuilder } from '../types';

const generateMail = ({ theme, body }:IMailBuilder) => {
  const mailGenerator = new Mailgen({
    theme: theme || 'default',
    product: {
      name: 'Ntherapy',
      link: 'https://ntherapy.com/',
    },
  });
  const email = {
    body,
  };
  const emailBody = mailGenerator.generate(email);
  const emailText = mailGenerator.generatePlaintext(email);

  return { emailBody, emailText };
};

export default generateMail;
