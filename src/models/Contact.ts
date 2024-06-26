export class Contact {
  phone: string;
  email: string;

  constructor(phone: string, email: string) {
    this.phone = phone;
    this.email = Contact.validateEmail(email);
  }

  private static validateEmail(email: string): string {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return '';
    }

    return email;
  }
}
