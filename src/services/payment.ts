import Stripe from 'stripe';
import config from '../config';

const apiKey = config.API_KEY;
const stripeInstance = new Stripe(apiKey as string, {
  apiVersion: '2022-11-15',
});

const getClientSecret = async (session_price: number, userId: string | undefined) => {
  console.log(userId);
  const paymentIntent = await stripeInstance.paymentIntents.create({
    amount: session_price,
    currency: 'usd',
    payment_method_types: ['card'],
    receipt_email: user_email,
  });

  return paymentIntent;
};

export default getClientSecret;
