const model = require('../../models');

const createFormHandler = async (request, h) => {
  try {
    await model.Form.createForm(
      request.payload.formId, request.payload.formName, request.payload.fieldsAndResponses,
    );
    return h.response('ADDED FORM');
  } catch (err) {
    return h.response('ERROR IN ADDING FORM');
  }
};

module.exports = { createFormHandler };
