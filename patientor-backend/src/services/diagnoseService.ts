import diagnoseData from '../../data/diagnoses';
import { Diagnose } from '../types';

const diagnoses = diagnoseData;

const getEntries = (): Diagnose[] => {
    return diagnoses;
};
  
const addEntry = () => {
    return null;
};
  
export default {
    getEntries,
    addEntry
};