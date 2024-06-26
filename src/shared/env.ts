import * as dotenv from 'dotenv';

const getEnv = () => ({
  user: {
    brb: {
      email: process.env.ACCOUNT_EMAIL,
      password: process.env.ACCOUNT_PASSWORD,
    },
    consistech: {
      email: process.env.CONSISTECH_EMAIL,
      password: process.env.CONSISTECH_PASSWORD,
    },
  },
});

dotenv.config();

export const env = getEnv();
