const Joi = require('joi');
const { createFormHandler } = require('../handlers/createFormHandler');

module.exports = [{
  path: '/createForm',
  method: 'POST',
  config: {
    validate: {
      payload: {
        formId: Joi.string().required(),
        formName: Joi.string().required(),
        fieldsAndResponses: Joi.object().required(),
      },
    },
  },
  handler: createFormHandler,
}];
