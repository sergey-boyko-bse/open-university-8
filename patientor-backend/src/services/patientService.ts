import patientData from '../../data/patients';
import { Patient, NonSensitivePatient, NewPatient } from '../types';

const patients = patientData;

const getEntries = (): Patient[] => {
    return patients;
};

const findById = (id: string): Patient | undefined => {
    const entry = patients.find(d => d.id === id);
    return entry;
};

const getNonSensitiveEntries = (): NonSensitivePatient[] => {
    return patients.map (({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};
  
const addEntry = (newPatient: NewPatient): NonSensitivePatient => {
    const patient = { ...newPatient, id: ''}; 
    patients.push(patient);
    return patient;
};
  
export default {
    getEntries,
    getNonSensitiveEntries,
    findById,
    addEntry
};