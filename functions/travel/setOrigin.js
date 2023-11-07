const countriesList = require('./countriesList');

const setOrigin = (origin) => {
  if (origin === '') return false;

  const birth = origin.trim('').toLowerCase().split(' ');

  for (let i = 0; i < birth.length; i++) {
    birth[i] = birth[i][0].toUpperCase() + birth[i].slice(1);

    if (countriesList.includes(birth.join(' '))) {
      return true;
    } else {
      return false;
    }
  }
};
module.exports = setOrigin;
