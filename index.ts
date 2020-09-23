import express from 'express';
import calculateBmi from './calculateBmi';
import calculateExercises from './calculateExercises';

const app = express();
app.use(express.json());

app.get('/ping', (_req, res) => {
  res.send('pong');
});

app.get('/bmi', (req, res) => {
    try {
        const weight = Number(req.query.weight);
        const height = Number(req.query.height);
        if(!req.query.weight || !req.query.height || isNaN(weight) || isNaN(height)) {
            return res.status(400).send('malformatted parameters');
        }
        const bmi = calculateBmi(height, weight);
        return res.json({ weight, height, bmi });
    } catch(e) {
        return res.status(400).send('malformatted parameters');
    }
});

app.post('/exercises', (req, res) => {
    try {
        const body: { daily_exercises: number[], target: number } = req.body as { daily_exercises: number[], target: number };
        if (!body || !body.daily_exercises || !body.target) {
            return res.status(400).json({ 
                error: 'parameters missing'
            });
        }
        if(body.daily_exercises.find(x => isNaN(x)) || isNaN(body.target)) {
            return res.status(400).send('malformatted parameters');
        }
        const result = calculateExercises(body.daily_exercises, body.target);
        return res.json(result);
    } catch(e) {
        return res.status(400).send('malformatted parameters');
    }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});