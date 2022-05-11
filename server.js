const ho = require('./utils/horoscope');
const userSign = ho.getUserSign(5,12);
const userAnimalSign =ho.getUserAnimal(2000);
const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
// app.listen(PORT, () => {
//   console.log(`App listening on port ${PORT}!`);
// });

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

console.log(userSign);
console.log(userAnimalSign);
ho.getPrediction(userSign);


