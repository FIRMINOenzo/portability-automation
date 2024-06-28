import { filterNumbers } from '../utils';

export class Contact {
  phone: string;

  constructor(phone: string) {
    this.phone = filterNumbers(phone);
  }
}
