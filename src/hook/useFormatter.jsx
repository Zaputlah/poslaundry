const useFormatter = () => {

  const toCurrency = (value) => {
    const locale = import.meta.env.VITE_LOCALE;
    const config = { style: 'currency', currency: import.meta.env.VITE_CURRENCY }
    return new Intl.NumberFormat(locale, config).format(value)
  }

  return { toCurrency, } 
}

export default useFormatter;