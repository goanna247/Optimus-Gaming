const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  // data.lastName = !isEmpty(data.lastName) ? data.lastName: "";
  data.email = !isEmpty(data.email) ? data.email : "";
  // data.phone = !isEmpty(data.phone) ? data.phone : 0;
  // data.streetNumber = !isEmpty(data.streetNumber) ? data.streetNumber : 0;
  // data.streetName = !isEmpty(data.streetName) ? data.streetName : "";
  // data.suburb = !isEmpty(data.suburb) ? data.suburb : "";
  // data.postCode = !isEmpty(data.postCode) ? data.postCode : 0;
  // data.age = !isEmpty(data.age) ? data.age : 0;
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // if (Validator.isEmpty(data.lastname)) {
  //   errors.lastName = "last name field is required";
  // }
  
  // Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  
  // if (Validator.isEmpty(data.phone)) {
  //   errors.phone = "phone number is required";
  // }

  // if (Validator.isEmpty(data.streetNumber)) {
  //   errors.streetNumber = "Street number is required";
  // }

  // if (Validator.isEmpty(data.streetName)) {
  //   errors.streetName = "Street name is required";
  // }

  // if (Validator.isEmpty(data.suburb)) {
  //   errors.suburb = "suburb is required";
  // }

  // if (Validator.isEmpty(data.postCode)) {
  //   errors.postCode = "Post code is required";
  // }

  // if (Validator.isEmpty(data.age)) {
  //   errors.age = "age is required";
  // }

  // Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

  if (Validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be at least 6 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
