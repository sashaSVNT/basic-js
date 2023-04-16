const { NotImplementedError } = require('../extensions/index.js');


function getSeason(date) {
  if (!date || isNaN(date.getTime())) {
    throw new Error();
  }
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  const month = date.getMonth();
  let season;
  switch (month) {
    case 11:
    case 0:
    case 1:
      season = `winter`;
      break;
    case 2:
    case 3:
    case 4:
      season = `spring`;
      break;
    case 5:
    case 6:
    case 7:
      season = `summer`;
      break;
    case 8:
    case 9:
    case 10:
      season = `autumn`;
      break;
    default:
      return 'Unable to determine the time of year!';
  }
  return season;
}

module.exports = {
  getSeason
};
