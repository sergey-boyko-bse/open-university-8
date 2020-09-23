const calculateBmi = (height: number, weight: number): string => {
    const index = weight / Math.pow(height / 100, 2);
    if (index < 15)
        return 'Very severely underweight';
    if (index < 16)
        return 'Severely underweight';
    if (index < 18.5)
        return 'Underweight';
    if (index < 25)
        return 'Normal (healthy weight)';
    if (index < 30)
        return 'Overweight';
    if (index < 35)
        return 'Obese Class I (Moderately obese)';
    if (index < 40)
        return 'Obese Class II (Severely obese)';
    return 'Obese Class III (Very severely obese)';
};

export default calculateBmi;