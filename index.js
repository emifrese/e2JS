const pizzas = [
	{
		id: 1,
		nombre: "pizza de Muzzarella",
		precio: 500,
		ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
	},

	{
		id: 2,
		nombre: "pizza de Cebolla",
		precio: 1500,
		ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
	},

	{
		id: 3,
		nombre: "pizza Napolitana",
		precio: 1350,
		ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
	},

	{
		id: 4,
		nombre: "pizza 4 Quesos",
		precio: 1380,
		ingredientes: [
			"Muzzarella",
			"Tomate",
			"Queso Azul",
			"Parmesano",
			"Roquefort",
		],
	},
	{
		id: 5,
		nombre: "pizza Especial",
		precio: 1000,
		ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
	},

	{
		id: 6,
		nombre: "pizza con Anana",
		precio: 600,
		ingredientes: ["Muzzarella", "Tomate", "Anana"],
	},
];

// Consigna A


pizzas.forEach(pizza => pizza.id % 2 !== 0 && console.log(`La ${pizza.nombre} corresponde al grupo de pizzas con id impar`))

// Consigna B

// let msg; 
// pizzas.findIndex(pizza => pizza.precio < 600) !== -1 ? msg= 'Existe una pizza con valor menor a $600' : msg = 'No existe una pizza con valor menor a $600'

// console.log(msg)

// Consigna C

// pizzas.forEach(pizza => console.log(`La ${pizza.nombre} tiene un valor de $${pizza.precio}`))

// Consigna D

// pizzas.forEach((pizza) => {
//   console.log(`La ${pizza.nombre} lleva los siguientes ingredientes: ${pizza.ingredientes.join(", ")}.`)
// })

// Si tengo que imprimir los ingredientes separados asi:

const ingredientesPorPizza = pizzas.map(pizza => pizza.ingredientes)

// pizzas.forEach((pizza, i) => {
//   console.log(`La ${pizza.nombre} lleva los siguientes ingredientes:`)
//   ingredientesPorPizza[i].forEach(ingrediente => console.log(ingrediente))
// })