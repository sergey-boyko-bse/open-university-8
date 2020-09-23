import { NewPatient, Gender } from './types';

export const toNewPatient = (object: any): NewPatient => {
    return {
        name: parseString(object.name, 'name'),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseString(object.ssn, 'ssn'),
        gender: parseGender(object.gender),
        occupation: parseString(object.occupation, 'occupation')
    };
};

const isString = (text: any): text is string => {
    return typeof text === 'string' || text instanceof String;
};

const isDate = (date: string): boolean => {
    return Boolean(Date.parse(date));
};

const isGender = (param: any): param is Gender => {
    return Object.values(Gender).includes(param);
};

const parseString = (str: any, name: string): string => {
    if (!str || !isString(str)) {
      throw new Error(`Incorrect or missing ${name}: ` + str);
    }
  
    return str;
}
  
const parseDate = (date: any): string => {
    if (!date || !isString(date) || !isDate(date)) {
        throw new Error('Incorrect or missing date: ' + date);
    }
    return date;
};

const parseGender = (gender: any): Gender => {
    if (!gender || !isGender(gender)) {
        throw new Error('Incorrect or missing gender: ' + gender);
    }
    return gender;
};