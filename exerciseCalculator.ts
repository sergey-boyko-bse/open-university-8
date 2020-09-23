import calculateExercises from './calculateExercises';

interface CalculatorParams {
    actual: number[], 
    target: number
}

const parseCalcArguments = (args: Array<string>): CalculatorParams => {
    if (args.length < 4) throw new Error('Not enough arguments');

    const calcParams = args.slice(2).map(x => Number(x));
  
    if (calcParams.filter(x => isNaN(x)).length > 0) {
        throw new Error('Provided values were not numbers!');
    }

    return {
        actual: calcParams.slice(1), 
        target: calcParams[0]
    };
};

try {
    const { actual, target } = parseCalcArguments(process.argv);
    const result = calculateExercises(actual, target);
    console.log(result);
} catch (error) {
    console.log('Error, something bad happened, message: ', (error as Error).message);
}