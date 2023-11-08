const countriesList = require('../countriesList');

const bookTrip = (destination) => {
  if (destination === '' || destination.length === 0) {
    throw new Error('Enter your destination');
  }

  const country = destination.trim('').toLowerCase().split(' ');

  for (let i = 0; i < country.length; i++) {
    country[i] = country[i][0].toUpperCase() + country[i].slice(1);
  }

  if (countriesList.includes(country.join(' '))) {
    return country.join(' ');
  } else {
    return false;
  }
};

module.exports = bookTrip;
