import { v4 as uuid } from 'uuid'; 
import patientData from '../../data/patients';
import { Patient, NonSensitivePatient, NewPatient, Entry, NewEntry } from '../types';

const patients = patientData;

const getPatients = (): Patient[] => {
    return patients;
};

const findPatientById = (id: string): Patient | undefined => {
    const entry = patients.find(d => d.id === id);
    return entry;
};

const getNonSensitivePatient = (): NonSensitivePatient[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};
  
const addPatient = (newPatient: NewPatient): NonSensitivePatient => {
    const patient = { ...newPatient, id: uuid()}; 
    patients.push(patient);
    return patient;
};
  
const addEntry = (patientId: string, newEntry: NewEntry): Entry => {
    const entry: Entry = { ...newEntry, id: uuid()}; 
    patients.find(patient => patient.id === patientId)?.entries.push(entry);
    return entry;
};
  
export default {
    getPatients,
    getNonSensitivePatient,
    findPatientById,
    addPatient,
    addEntry
};