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
    this.birthDate = filterNumbers(birthDate);
    this.birthState = birthState;
    this.birthCity = removeAccents(birthCity);
    this.registration = registration;
    this.motherName = removeAccents(motherName);
  }
}
