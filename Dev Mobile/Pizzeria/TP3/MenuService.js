// Tristan Annaval

const readline = require('readline');
const Pizza = require('./pizza').Pizza;

const promptMessage = `**** Pizzeria Information *****  \n 
1. Lister les pizzas \n 
2. Ajouter une nouvelle pizza \n
3. Mettre à jour une pizza \n
4. Supprimer une pizza \n
99. Sortir \n :`

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: promptMessage
});

class MenuServiceFactory {
    menuService = new MenuService();
    listService = new ListService();
    addService = new AddService();
    updateService = new UpdateService();
    deleteService = new DeleteService();

    constructor() {
    }

    action() {
        rl.prompt();

        rl.on('line', (line) => {
            switch (line.trim()) {
                case '1':
                    console.log('List Pizzas');
                    this.listService.executeUC(this.menuService.pizzas);
                    break;
                case '2':
                    console.log('Add Pizza');
                    this.addService.executeUC(this.menuService.pizzas);
                    break;
                case '3':
                    console.log('Update Pizza');
                    rl.question('Please type your pizza code ? ', (pizzaCode) => {
                        this.updateService.executeUC(this.menuService.pizzas, pizzaCode);
                    })
                    break;
                case '4':
                    console.log('Delete Pizza');
                    rl.question('Please type your pizza code ? ', (pizzaCode) => {
                        this.deleteService.executeUC(this.menuService.pizzas, pizzaCode);
                    })
                    break;
                case '99':
                    console.log('Bye !');
                    process.exit(0);
                    break;
                default:
                    this.listService.executeUC(this.menuService.pizzas);
                    break;
            }
            rl.prompt();
        }).on('close', () => {
            console.log('Bye !');
            process.exit(0);
        });
    }
}

class MenuService {
    pizzas = [
        new Pizza(0, "PEP", "Pépéroni", 12.50),
        new Pizza(1, "MAR", "Margharita", 14.00),
        new Pizza(2, "REIN", "La Reine", 11.50),
        new Pizza(3, "FRO", "La 4 Fromages", 12.00),
        new Pizza(4, "CAN", "La cannibale", 12.50),
        new Pizza(5, "SAV", "La savoyarde", 13.00),
        new Pizza(6, "ORI", "L'orientale", 13.50),
        new Pizza(7, "IND", "L'indienne", 14.00),
    ];
    
    i = 0;

    constructor() {}

    findPizzaByCode(code) {
        let pizza = new Pizza();
        for (this.i = 0; this.i < this.pizzas.length; this.i++) {
            if (this.pizzas[this.i].code == code) {
                pizza = this.pizzas[this.i];
            }
        }
        return pizza;
    }
}

class ListService extends MenuService {
    executeUC(pizzas) {
        console.log(pizzas);
    }
}

class AddService extends MenuService {
    executeUC(pizzas) {
        let pizza = new Pizza();
        pizza.id = pizzas.length;
        rl.question('Please type your pizza code ? ', (pizzaCode) => {
            pizza.code = pizzaCode;
            rl.question('Please type your pizza libelle ? ', (pizzaLibelle) => {
                pizza.libelle = pizzaLibelle;
                rl.question('Please type your pizza price ? ', (pizzaPrice) => {
                    pizza.prix = Number(pizzaPrice);
                    pizzas.push(pizza);
                });
            });
        });
    }
}

class UpdateService extends MenuService {
    executeUC(pizzas, code) {
        let pizza = super.findPizzaByCode(code);
        rl.question('Please type your new pizza code ? ', (pizzaCode) => {
            pizza.code = pizzaCode;
            rl.question('Please type your new pizza libelle ? ', (pizzaLibelle) => {
                pizza.libelle = pizzaLibelle;
                rl.question('Please type your new pizza price ? ', (pizzaPrice) => {
                    pizza.prix = Number(pizzaPrice);
                    pizzas[pizza.id] = pizza;
                });
            });
        });
    }
}

class DeleteService extends MenuService {
    executeUC(pizzas, code) {
        let pizza = super.findPizzaByCode(code);
        pizzas.splice(pizza.id, 1)
    }
}

module.exports.MenuServiceFactory = MenuServiceFactory;

// Tristan Annaval