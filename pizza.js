function prepararMasa() {
    console.log("Cogiendo la masa");
    console.log("Estirando la masa");
}

function añadirIngredientes(tipoPizza) {
    console.log("Añadiendo tomate");
    console.log("Añadiendo mozzarella");
    
    switch (tipoPizza) {
        case 'pepperoni':
            console.log("Añadiendo pepperoni");
            break;
        case 'margarita':
            console.log("Añadiendo albahaca");
            break;
        // Puedes agregar más tipos de pizza aquí
        default:
            console.log(`Añadiendo ingredientes para ${tipoPizza}`);
            break;
    }
}

function hornearPizza() {
    console.log("Horneando la pizza");
}

function entregarPizza() {
    console.log("Pizza ready");
    console.log("Pizza entregada");
}

function prepararPizza(tipoPizza) {
    prepararMasa();
    añadirIngredientes(tipoPizza);
    hornearPizza();
    entregarPizza();
}

module.exports = { prepararPizza };
