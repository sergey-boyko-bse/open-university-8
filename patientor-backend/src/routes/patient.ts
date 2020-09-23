import express from 'express';
import patientService from '../services/patientService';
import { toNewPatient } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  const data = patientService.getNonSensitiveEntries();
  res.json(data);
})

router.get('/:id', (req, res) => {
  const patient = patientService.findById(req.params.id);

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
})

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);
    const patient = patientService.addEntry(newPatient);
    res.json(patient);
  } catch (e) {
    res.status(400).send(e.message);
  }
})

export default router;