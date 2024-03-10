const axios = require('axios');

const apiNext = axios.create({
  baseURL: '/api',
});

const apiPlaces = axios.create({
  baseURL: 'https://maps.googleapis.com/maps/api/place',
});

module.exports = { apiNext, apiPlaces };
