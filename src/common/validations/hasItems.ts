import { FieldValidationFunctionSync } from "@lemoncode/fonk";
// import {ValidationSchema, Validators  } from '@lemoncode/fonk';

// export const validationSchema: ValidationSchema = {
//   field: {
//     description: [Validators.required],
//   },
// };

export const hasItems: FieldValidationFunctionSync = ({ value }) => {
  const isValid = Array.isArray(value) && value.length > 0;
  return {
    type: "ARRAY_HAS_ITEMS",
    succeeded: isValid,
    message: isValid ? "" : "Should has one or more ingredients",
  };
};
