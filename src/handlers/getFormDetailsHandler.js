const model = require('../../models');

const getFormDetailsHandler = async (request, h) => {
  try {
    const forms = await model.Form.getAllForms();
    return h.response(forms);
  } catch (err) {
    return h.response(err);
  }
};

module.exports = { getFormDetailsHandler };
