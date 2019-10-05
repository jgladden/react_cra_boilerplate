import { useState } from "react";

const useFormUtil = (callback, fieldsInitialState) => {
  const [fields, setFields] = useState(fieldsInitialState);

  const onSubmit = e => {
    if (e) e.preventDefault();
    let validForm = true;
    let validFields = {};
    let updatedFields = {};
    Object.keys(fields).forEach(key => {
      updatedFields[key] = validate({ ...fields[key] });
      if (updatedFields[key].errors.length) {
        validForm = false;
      } else {
        validFields[key] = updatedFields[key].value;
      }
    });
    if (validForm) callback(validFields);
    setFields(updatedFields);
  };

  const validate = field => {
    if (!field.validators) return field;
    field.errors = field.validators.reduce((acc, validator) => {
      if (!validator.test(field.value)) acc.push(validator);
      return acc;
    }, []);
    return field;
  };

  const onChange = e => {
    setFields({
      ...fields,
      [e.target.name]: {
        ...fields[e.target.name],
        value:
          e.target.type !== "checkbox"
            ? e.target.value
            : e.target.checked
            ? "1"
            : ""
      }
    });
  };

  return {
    onSubmit,
    onChange,
    fields
  };
};

export default useFormUtil;
