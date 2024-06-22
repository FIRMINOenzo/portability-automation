import * as dotenv from "dotenv";

const getEnv = () => ({
  user: {
    email: process.env.ACCOUNT_EMAIL,
    password: process.env.ACCOUNT_PASSWORD,
  },
});

dotenv.config();

export const env = getEnv();
