export const NUMBER_VALIDATION = (value) => {
  const NRX = new RegExp(/^[0-9]+([.][0-9]+)?$/);
  console.log(value, Boolean(value), !NRX.test(value), !value, !!value);
  const error = value ? !NRX.test(value) : false;
  return error ? "Required Numeric only" : false;
};

export const CURRENCY_TEXT = (value) => {
  return Number(value).toFixed(2);
};
