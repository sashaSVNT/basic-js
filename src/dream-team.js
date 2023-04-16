const { NotImplementedError } = require('../extensions/index.js');


function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }
  let newMembers = members.filter(el => typeof el === 'string').map(el => el.trim());
  // if (newMembers.length === 0) return false;
  let firstLetterArr = newMembers.map(el => el[0].toUpperCase()).sort().join('');
  return firstLetterArr;
}

module.exports = {
  createDreamTeam
};
