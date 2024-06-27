import { MaritalStatus, Sex, State } from '../enums';

export class PersonalData {
  name: string;
  maritalStatus: MaritalStatus;
  sex: Sex;
  birthDate: string;
  birthState: State;
  birthCity: string;
  registration: string;
  motherName: string;

  constructor(
    name: string,
    maritalStatus: MaritalStatus,
    sex: Sex,
    birthDate: string,
    birthState: State,
    birthCity: string,
    registration: string,
    motherName: string
  ) {
    this.name = name;
    this.maritalStatus = maritalStatus;
    this.sex = sex;
    this.birthDate = PersonalData.formatBirthDate(birthDate);
    this.birthState = birthState;
    this.birthCity = birthCity;
    this.registration = registration;
    this.motherName = motherName;
  }

  private static formatBirthDate(birthDate: string): string {
    return birthDate.replace(/\D/g, '').substring(0, 8);
  }

  private static formatGrossIncome(grossIncome: string): string {
    return grossIncome.replace(/\D/g, '');
  }
}
