const model = require('../../models');

const updateResponseHandler = async (request, h) => {
  try {
    const forms = await model.Form.updateResponse(
      request.payload.formId, request.payload.fieldsAndResponses,
    );
    console.log(forms);
    return h.response(forms);
  } catch (err) {
    return h.response(err);
  }
};

module.exports = { updateResponseHandler };
