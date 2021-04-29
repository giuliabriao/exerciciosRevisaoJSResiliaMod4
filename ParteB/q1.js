//Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors
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

var getShirtsColorsAmount = (company) => {
    const { products: { shirts: { colors: shirtsColors } } } = company
    return shirtsColors;
};

console.log(getShirtsColorsAmount(company))