import Stripe from 'stripe';
import config from '../config';

const apiKey = config.API_KEY;
const stripeInstance = new Stripe(apiKey as string, {
  apiVersion: '2022-11-15',
});

const calculateOrderAmount = () => 1400;

const getClientSecret = async () => {
  const paymentIntent = await stripeInstance.paymentIntents.create({
    amount: calculateOrderAmount(),
    currency: 'usd',
    payment_method_types: ['card'],
  });

  return paymentIntent;
};

export default getClientSecret;
