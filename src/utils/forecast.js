const request = require('request');

const forecast = (latitude, longitude, callback) => {
  const url = `https://api.darksky.net/forecast/f037a6fb4206f65c6606dc26a15e4595/${latitude},${longitude}?units=si`;

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback('Unable to connect to weather service!', undefined);
    } else if (body.error) {
      callback('Unable to find location', undefined);
    } else {
      callback(
        undefined,
        body.daily.data[0].summary +
          ' It is currently ' +
          body.currently.temperature +
          ' celcius out. The minimun is ' +
          body.daily.data[0].temperatureMin +
          ' celcius and the maximum is ' +
          body.daily.data[0].temperatureMax +
          ' celcius. There is a ' +
          body.currently.precipProbability +
          '% chance of rain today.'
      );
    }
  });
};

module.exports = forecast;
