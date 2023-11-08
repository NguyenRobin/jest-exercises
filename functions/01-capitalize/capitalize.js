const capitalize = (str) => {
  if (str.trim() === '') return;

  const words = str.trim().split(' ');

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
};

module.exports = capitalize;
