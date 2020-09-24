import { NewPatient, Gender, Entry, EntryType, NewEntry } from './types';

export const toNewPatient = (object: any): NewPatient => {
    return {
        name: parseString(object.name, 'name'),
        dateOfBirth: parseDate(object.dateOfBirth),
        ssn: parseString(object.ssn, 'ssn'),
        gender: parseGender(object.gender),
        occupation: parseString(object.occupation, 'occupation'),
        entries: parseEntries(object.entries)
    };
};

export const toNewEntry = (object: any): NewEntry => {
    return {
        ...object,
        type: parseEntryType(object.type),
        description: parseString(object.description, 'description'),
        date: parseDate(object.date),
        specialist: parseString(object.specialist, 'specialist')
    };
};

const parseEntries = (entries: any): Entry[] => {
    if(!entries) {
        return [];
    }
    if(!Array.isArray(entries)) {
        throw new Error(`Incorrect entries: ` + JSON.stringify(entries));
    }
    const array = entries as Array<any>;
    if(array.find(x => !isEntryType(x.type))) {
        throw new Error(`Incorrect entries: ` + JSON.stringify(entries));
    }
    return array as Entry[];
}

const isEntryType = (str: any): str is EntryType => {
    return ['HealthCheck', 'Hospital', 'OccupationalHealthcare' ].includes(str);
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

const parseEntryType = (entryType: any): EntryType => {
    if (!entryType || !isEntryType(entryType)) {
        throw new Error('Incorrect or missing entry type: ' + entryType);
    }
    return entryType;
};