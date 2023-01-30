const notas = [10, 10.5, 6, 7];

//Adiciona +1 em cada nota
// const novasNotas = notas.map((nota) =>{
//     return nota+1;
// });
//
// console.log(novasNotas);

//Adiciona +1 em cada nota mas notas novas não devem passar de 10

// const novasNotas = notas.map((nota)=>{
//     return nota+1 >= 10 ? 10 : nota+1;
// })
//
// console.log(novasNotas);
////////////////////////////////////////////////////////////////////

const nomes = ['Antonio carlos', 'amanda Nunes', 'rOdrigo ximenes'];

const novosNomes = nomes.map((name) => {
    return name.toUpperCase();
})

console.log(novosNomes);

