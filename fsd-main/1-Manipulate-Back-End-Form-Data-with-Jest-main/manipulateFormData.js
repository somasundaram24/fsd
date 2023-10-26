// manipulateFormData.js

function addNewField(formData, fieldName, fieldValue) {
    return {
      ...formData,
      [fieldName]: fieldValue,
    };
  }
  
  function removeField(formData, fieldName) {
    const { [fieldName]: removedField, ...remainingFormData } = formData;
    return remainingFormData;
  }
  
  function updateField(formData, fieldName, fieldValue) {
    return {
      ...formData,
      [fieldName]: fieldValue,
    };
  }
  
  module.exports = {
    addNewField,
    removeField,
    updateField,
  };
  