const nomes = ['Antonio', 'Sérgio', 'Elielson'];

//1° forma
// nomes.forEach(function (name) {
//     console.log(name);
// })

//2° forma
// nomes.forEach((name) => {
//     console.log(name);
// })

//3° Forma
nomes.forEach(imprimeName);

function imprimeName(name){
    console.log(name);

}