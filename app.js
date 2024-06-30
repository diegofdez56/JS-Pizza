const prompt = require('prompt-sync')();
const { prepararPizza } = require('./pizza');

const tipoPizza = prompt('And your pizza is ... (pepperoni): ');
console.log(`Pizza ${tipoPizza} in preparation`);

prepararPizza(tipoPizza);
