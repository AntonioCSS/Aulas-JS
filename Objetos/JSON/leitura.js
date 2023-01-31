const recebe = require('./cliente.json');

//função require traz  dados do json de outro diretório
console.log(recebe);
//tipo da const recebe
console.log(typeof recebe);

//stringfy transforma formato objeto para string
const jsonparastring = JSON.stringify(recebe);
console.log(jsonparastring);
console.log(typeof jsonparastring);

//parse transforma formato string para objeto
const stringparajson = JSON.parse(jsonparastring);
console.log(stringparajson);
console.log(typeof stringparajson);
