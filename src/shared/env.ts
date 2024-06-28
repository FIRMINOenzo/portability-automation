import * as dotenv from 'dotenv';

const getEnv = () => ({
  user: {
    brb: {
      email: process.env.ACCOUNT_EMAIL,
      password: process.env.ACCOUNT_PASSWORD,
    },
    consitech: {
      email: process.env.CONSITECH_EMAIL,
      password: process.env.CONSITECH_PASSWORD,
    },
  },
});

dotenv.config();

export const env = getEnv();
