const getSign = require('horoscope').getSign;
const getZodiacAnimal = require('chinese-year');
const getZodiac = require('horoscope').getZodiac;
const request = require('request');


function getUserSign(month,day){
    return getSign({month: month, day: day });
}

function getUserAnimal(year){
    const userAnimal = getZodiacAnimal.getAnimal(year);
    return userAnimal;    
}

function getPrediction(sign){
    var options = {
    url: 'https://aztro.sameerkumar.website/?sign=' + sign + '&day=today',
    method: 'POST'
    };
    request(options, callback);
}

function callback(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body);
    }
}

exports.getUserSign = getUserSign;
exports.getPrediction = getPrediction;
exports.getUserAnimal= getUserAnimal;
