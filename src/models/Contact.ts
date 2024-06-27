export class Contact {
  phone: string;

  constructor(phone: string) {
    this.phone = Contact.formatPhone(phone);
  }

  private static formatPhone(phone: string): string {
    return phone.replace(/\D/g, '');
  }
}
