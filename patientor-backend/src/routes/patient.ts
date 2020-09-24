import express from 'express';
import patientService from '../services/patientService';
import { toNewPatient, toNewEntry } from '../utils';

const router = express.Router();

router.get('/', (_req, res) => {
  const data = patientService.getNonSensitivePatient();
  res.json(data);
})

router.get('/:id', (req, res) => {
  const patient = patientService.findPatientById(req.params.id);

  if (patient) {
    res.send(patient);
  } else {
    res.sendStatus(404);
  }
})

router.post('/', (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);
    const patient = patientService.addPatient(newPatient);
    res.json(patient);
  } catch (e) {
    res.status(400).send(e.message);
  }
})

router.post('/:id/entries', (req, res) => {
  try {
    const patientId = req.params.id;
    const newEntry = toNewEntry(req.body);
    const entry = patientService.addEntry(patientId, newEntry);
    res.json(entry);
  } catch (e) {
    res.status(400).send(e.message);
  }
})

export default router;