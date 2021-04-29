//A partir do objeto abaixo, instancie uma variavel que receba ​name​ e outra para colors

company = {
    name: 'ACME Corp',
    address: 'Nowhere st',
    products: {
        shirts: {
            colors: ['red', 'green', 'blue'],
            sizes: ['L', 'M', 'S'],
        },
        socks: {
            colors: ['cyan', 'magenta', 'yellow'],
        },
    },
};

// const { name, products: {shirts: {colors: shirtsColors}}, products: {socks: {colors: socksColors} }} = company

// console.log(name);
// console.log(shirtsColors);
// console.log(socksColors);

var getShirtsColorsAmount = (company) => {
    const {products: {shirts: {colors: shirtsColors}}} = company
    return shirtsColors;
  };

  console.log(getShirtsColorsAmount(company))