const { NotImplementedError } = require('../extensions/index.js');


function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date && !isNaN(date))) {
    throw new Error('Invalid date!');
  }

  const currentMonth = date.getMonth();
  if (currentMonth >= 2 && currentMonth <= 4) {
    return `spring`;
  }
  else if (currentMonth >= 5 && currentMonth <= 7) {
    return `summer`;
  }
  else if (currentMonth >= 8 && currentMonth <= 10) {
    return `autumn`;
  }
  else
    return `winter`;
}


module.exports = {
  getSeason
};
