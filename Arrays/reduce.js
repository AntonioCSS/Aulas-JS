const sala_1 = [10, 10, 10];
const sala_2 = [7.5,5,8];
const sala_3 = [8,6,7.5];

// function media(notas){
//     const somaDasNotas = notas.reduce((acc,nota)=>{
//         return acc+nota;
//     },0)
//     console.log(somaDasNotas/notas.length);
// };

//Código alternativo sem uso de return
function media(notas){
    const somaDasNotas = notas.reduce((acc,nota)=>
    acc + nota, 0
    )
    console.log(somaDasNotas/notas.length);
}

media(sala_1);
media(sala_2);
media(sala_3);