import { User } from './User';

export class ConsitechUser extends User {
  token: string;

  constructor(email: string, password: string, token: string) {
    super(email, password);
    this.token = token;
  }
}
