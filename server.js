const ho = require('./utils/horoscope');
const userSign = ho.getUserSign(1,25);
console.log(userSign);
ho.getPrediction(userSign);

