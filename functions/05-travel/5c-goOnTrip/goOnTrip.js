const bookTrip = require('../5b-bookTrip/bookTrip');
const setOrigin = require('../5a-setOrigin/setOrigin');

const goOnTrip = (from, to) => {
  const origin = setOrigin(from);
  const destination = bookTrip(to);

  if (!setOrigin || !bookTrip) {
    throw new Error('setOrigin and bookTrip is missing');
  }

  if (origin !== destination) {
    return true;
  } else {
    return false;
  }
};

module.exports = goOnTrip;
