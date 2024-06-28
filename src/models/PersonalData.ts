import { MaritalStatus, Sex, State } from '../enums';
import { filterNumbers, removeAccents } from '../utils';

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
    this.name = removeAccents(name);
    this.maritalStatus = maritalStatus;
    this.sex = sex;
    this.birthDate = PersonalData.formatBirthDate(birthDate);
    this.birthState = birthState;
    this.birthCity = removeAccents(birthCity);
    this.registration = PersonalData.convertRegistration(registration);
    this.motherName = removeAccents(motherName);
  }

  private static convertRegistration(registration: string): string {
    return registration.split(' - ')[0];
  }

  private static formatBirthDate(birthDate: string): string {
    // convert from yyyy-mm-dd to ddmmyyyy
    return birthDate.split('-').reverse().join('');
  }
}
