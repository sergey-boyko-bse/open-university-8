const calculateExercises = (actual: number[], target: number): Result => {
    const total = actual.reduce((a, b) => a + b, 0);
    const avg = (actual.length === 0 || total === 0) ? 0 : (total / actual.length);
    const rating = getRating(avg, target);
    return {
        periodLength: actual.length,
        trainingDays: actual.filter(x => x > 0).length,
        success: avg >= target,
        rating: rating.rating,
        ratingDescription: rating.ratingDescription,
        target: target,
        average: avg
    };
};

type RatingDescription = 'bad' | 'not too bad but could be better' | 'good' | 'excellent';

interface Result {
    periodLength: number,
    trainingDays: number,
    success: boolean,
    rating: number,
    ratingDescription: RatingDescription,
    target: number,
    average: number
}

interface Rating {
    rating: number,
    ratingDescription: RatingDescription
}

const ratings: Rating[] = [
    {
        rating: 4,
        ratingDescription: 'excellent'
    },
    {
        rating: 3,
        ratingDescription: 'good'
    },
    {
        rating: 2,
        ratingDescription: 'not too bad but could be better'
    },
    {
        rating: 1,
        ratingDescription: 'bad'
    }
];

const getRating = (avg: number, target: number): Rating => {
    if (avg > target)
        return ratings[0];
    if (avg === target)
        return ratings[1];
    if (avg > target / 2)
        return ratings[2];
    return ratings[3];
};

export default calculateExercises;