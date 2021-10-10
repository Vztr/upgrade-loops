//! _________ 1.1

const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];

for (let i = 0; i < products.length; i++) {
    if (products[i].includes("Camiseta")) {
		console.log(products[i])
	}
}

//! _________ 1.2

const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
	{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
	{name: 'Juan Miranda', T1: false, T2: true, T3: true},
	{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
	{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let i = 0; i < alumns.length; i++) {
	let count = 0;

	if(alumns[i].T1) {count++}
	if(alumns[i].T2) {count++}
	if(alumns[i].T3) {count++}

	if (count >= 2) {
		alumns[i].isApproved = true
	} else {
		alumns[i].isApproved = false
	}
}
	console.log(alumns);

//! _________ 1.3

const placesToTravel = ['Japon', 'Venecia', 'Murcia', 'Santander', 'Filipinas', 'Madagascar']

for (const destinos of placesToTravel) {
	console.log(destinos);
}

//! _________ 1.4

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (let values in alien) {
		console.log('${values} ${alien[values]}');
}

//! _________ 1.5

const placesToTravel = [{id: 5, name: 'Japan'}, 
						{id: 11, name: 'Venecia'},
						{id: 23, name: 'Murcia'},
						{id: 40, name: 'Santander'},
						{id: 44, name: 'Filipinas'},
						{id: 59, name: 'Madagascar'}]

for (let i = 0; i < placesToTravel.length; i++) {
	if (placesToTravel[i].id == 40 || placesToTravel[i].id == 11)
	placesToTravel.splice(i, 1);
}