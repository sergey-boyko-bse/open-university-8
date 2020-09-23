import calculateBmi from './calculateBmi';

interface BmiParams {    
    height: number,
    weight: number
}

const parseBmiArguments = (args: Array<string>): BmiParams => {
    if (args.length < 4) throw new Error('Not enough arguments');

    const cbmiParams = args.slice(2).map(x => Number(x));
  
    if (cbmiParams.filter(x => isNaN(x)).length > 0) {
        throw new Error('Provided values were not numbers!');
    }

    return {
        height: cbmiParams[0], 
        weight: cbmiParams[1]
    };
};

try {
    const { height, weight } = parseBmiArguments(process.argv);
    const result = calculateBmi(height, weight);
    console.log(result);
} catch (error) {
    console.log('Error, something bad happened, message: ', (error as Error).message);
}