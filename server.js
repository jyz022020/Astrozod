const ho = require('./utils/horoscope');
const userSign = ho.getUserSign(1,25);
const userAnimalSign =ho.getUserAnimal(1995);

console.log(userSign);
console.log(userAnimalSign);
ho.getPrediction(userSign);


