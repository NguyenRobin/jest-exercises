const countriesList = require('../countriesList');

const bookTrip = (destination) => {
  if (destination === '') return false;

  const country = destination.trim('').toLowerCase().split(' ');

  for (let i = 0; i < country.length; i++) {
    country[i] = country[i][0].toUpperCase() + country[i].slice(1);

    if (countriesList.includes(country.join(' '))) {
      return true;
    } else {
      return false;
    }
  }
};

bookTrip('sweden');

module.exports = bookTrip;
