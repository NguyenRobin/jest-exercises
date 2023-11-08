const countriesList = require('../countriesList');

const setOrigin = (origin) => {
  if (origin === '' || origin.length === 0) {
    throw new Error('Enter your origin');
  }
  const birth = origin.trim().toLowerCase().split(' ');

  for (let i = 0; i < birth.length; i++) {
    birth[i] = birth[i][0].toUpperCase() + birth[i].slice(1);
  }

  if (countriesList.includes(birth.join(' '))) {
    return birth.join(' ');
  } else {
    return false;
  }
};

module.exports = setOrigin;
