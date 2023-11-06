const isWaterBoiling = (degreesCelsius) => {
  const celsius = Math.round(degreesCelsius);
  if (celsius < 100) {
    throw new Error('Celsius degree is to cold to boiling');
  }

  return true;
};

module.exports = isWaterBoiling;
