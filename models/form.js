module.exports = (sequelize, DataTypes) => {
  const Form = sequelize.define('Form', {
    formid: DataTypes.STRING,
    formname: DataTypes.STRING,
    fieldsandresponses: DataTypes.JSONB,
  }, {});
  Form.getAllForms = () => Form.findAll();
  Form.getResponses = formId => Form.findOne({ where: { formid: formId } });
  Form.createForm = (formId, formName, fieldsAndResponses) => Form.create({
    formid: formId,
    formname: formName,
    fieldsandresponses: fieldsAndResponses,
  });

  // Form.updateResponse = (formId, fieldsAndResponses) => Form.update({
  //   fieldsandresponses: fieldsAndResponses,
  // }, {
  //   where: {
  //     formid: formId,
  //   },
  //   raw: true,
  // });

  Form.updateResponse = async (formId, fieldsAndResponses) => {
    const oldResponses = await Form.getResponses(formId);
    const obj = oldResponses.fieldsandresponses;
    Object.keys(obj).forEach((key) => {
      obj[key].push(fieldsAndResponses[key]);
    });
    Object.keys(obj).forEach((key) => {
      sequelize.query(`UPDATE "Forms" SET fieldsandresponses = jsonb_set(fieldsandresponses, '{${key}}', '["${obj[key]}"]', false)`);
    });
  };
  return Form;
};
