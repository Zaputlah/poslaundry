import { useState } from "react";

const useValidator = (initialState) => {
  const [validator, setValidator] = useState(initialState);

  const isAllValid = () => {
    return Object.values(validator).every(val => val.isValid);
  };

  const validateField = (name, value) => {
    let isValid = true;
    let errorMessage = "";

    if (name === "customerName") {
      const nameRegex = /^[a-zA-Z\s]*$/;
      isValid = nameRegex.test(value);
      if (!isValid) {
        errorMessage = "Customer name should contain only letters.";
      }
    } else if (name === "customerPhone") {
      const phoneRegex = /^[0-9]*$/;
      isValid = phoneRegex.test(value);
      if (!isValid) {
        errorMessage = "Customer phone should contain only numbers.";
      }
    }

    setValidator((prevValidator) => ({
      ...prevValidator,
      [name]: { isValid, errorMessage },
    }));
  };

  return { validator, setValidator, isAllValid, validateField };
};

export default useValidator;
