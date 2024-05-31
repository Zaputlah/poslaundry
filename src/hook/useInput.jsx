import useFormat from "./useFormat";

const useInput = (dataSetter, validationSetter = null) => {
  const format = useFormat();

  const handler = (e) => {
    const name = e.target.name;
    const type = e.target.type;
    let value = e.target.value;

    // TODO: mas kalo pas input text dibayar dari angka 40000 jadi 40.000 bisa ga?
    if (type === "number") {
      value = Number(value.replace(/\D/g, ""));
    }

    dataSetter((data) => ({ ...data, [name]: value }));
    if (validationSetter) {
      validationSetter((data) => ({
        ...data,
        [name]: {
          message: e.target.validationMessage,
          isValid: e.target.checkValidity(),
        },
      }));
    }
  };

  const numberMaskHandler = (e) => {
    const name = e.target.name;
    let value = e.target.value;

    // const result = format.toCurrency(
    //   Number(currentValue.toString().replace(/\D/g, "")) || 0
    // );

    dataSetter((values) => ({
      ...values,
      [name]: Number(value.replace(/\D/g, "")) || 0,
    }));
  };

  const numberValueMask = (currentValue) => {
    return format.toCurrency(
      Number(currentValue.toString().replace(/\D/g, "")) || 0
    );
  };

  return { handler, numberMaskHandler, numberValueMask };
};

export default useInput;
