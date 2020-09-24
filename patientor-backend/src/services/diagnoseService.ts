import diagnoseData from '../../data/diagnoses';
import { Diagnosis } from '../types';

const diagnoses = diagnoseData;

const getEntries = (): Diagnosis[] => {
    return diagnoses;
};
  
const addEntry = () => {
    return null;
};
  
export default {
    getEntries,
    addEntry
};