const Joi = require('joi');
const { updateResponseHandler } = require('../handlers/updateResponseHandler');

module.exports = [{
  path: '/updateResponse',
  method: 'PUT',
  config: {
    validate: {
      payload: {
        formId: Joi.string().required(),
        fieldsAndResponses: Joi.object().required(),
      },
    },
  },
  handler: updateResponseHandler,
}];
