const { NotImplementedError } = require('../extensions/index.js');


function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  try { 
    date.getTime(); 
  } catch (e) {
    throw new Error('Invalid date!');
  }
  if (!(date instanceof Date) || isNaN(date)) {
    throw new Error('Invalid date!');
  }

  const currentMonth = date.getMonth();
  if (currentMonth <= 1 || currentMonth === 11) {
    return 'winter';
  } else if (currentMonth <= 4) {
    return 'spring';
  } else if (currentMonth <= 7) {
    return 'summer';
  } else if (currentMonth <= 10) {
    return 'autumn';
  }
}

module.exports = {
  getSeason
};
