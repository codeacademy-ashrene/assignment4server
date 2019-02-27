const pingRoutes = require('./ping');
const getFormDetailsRoutes = require('./getFormDetails');
const createFormRoutes = require('./createForm');
const updateResponseRoutes = require('./updateResponse');

module.exports = [
  ...pingRoutes,
  ...getFormDetailsRoutes,
  ...createFormRoutes,
  ...updateResponseRoutes,
];
