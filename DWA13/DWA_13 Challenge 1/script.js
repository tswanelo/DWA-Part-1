const provinces = ['Western Cape', 'Gauteng', 'Northern Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State'];
const names = ['Ashwin', 'Sibongile', 'Jan-Hendrik', 'Sifso', 'Shailen', 'Frikkie'];

names.forEach(name => console.log(name));

names.forEach((name, index) => console.log(`${name} (${provinces[index]})`));

const uppercaseProvinces = provinces.map(province => province.toUpperCase());
console.log(uppercaseProvinces);

const nameLengths = names.map(name => name.length);
console.log(nameLengths);

const sortedProvinces = provinces.slice().sort();
console.log(sortedProvinces);

const filteredProvinces = provinces.filter(province => !province.includes('Cape'));
console.log(filteredProvinces.length);

const hasSCharacter = names.map(name => name.includes('S'));
console.log(hasSCharacter);

const personToProvince = names.reduce((acc, name, index) => {
    acc[name] = provinces[index];
    return acc;
}, {});
console.log(personToProvince);

const products = [
  { product: 'banana', price: "2" },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: "8" },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
];

products.forEach(product => console.log(product.product));

const filteredProducts = products.filter(product => product.product.length <= 5);

const validProducts = products
  .filter(product => product.price !== '' && !isNaN(Number(product.price)))
  .map(product => ({ ...product, price: Number(product.price) }));

const totalCost = validProducts.reduce((acc, product) => acc + product.price, 0);
console.log('Total Cost:', totalCost);

const concatenatedItems = products.reduce((acc, curr, index) => {
  if (index === products.length - 1) {
    return acc + ' and ' + curr.product;
  } else {
    return acc + curr.product + ', ';
  }
}, '');
console.log(concatenatedItems);

const priceStats = products.reduce(
  (acc, curr) => {
    const price = parseFloat(curr.price);
    if (price > acc.highest) {
      acc.highest = price;
      acc.highestItem = curr.product;
    }
    if (price < acc.lowest) {
      acc.lowest = price;
      acc.lowestItem = curr.product;
    }
    return acc;
  },
  { highest: -Infinity, highestItem: '', lowest: Infinity, lowestItem: '' }
);

console.log(`Highest: ${priceStats.highestItem}. Lowest: ${priceStats.lowestItem}`);

const modifiedProducts = Object.entries(products).reduce((acc, [key, value]) => {
  const modifiedKey = key === 'product' ? 'name' : key === 'price' ? 'cost' : key;
  acc[modifiedKey] = value;
  return acc;
}, {});
console.log(modifiedProducts);
