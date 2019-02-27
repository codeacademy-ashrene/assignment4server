const { getFormDetailsHandler } = require('../handlers/getFormDetailsHandler');

module.exports = [{
  path: '/form',
  method: 'GET',
  handler: getFormDetailsHandler,
}];
