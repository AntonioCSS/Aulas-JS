const nomes = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

//retira de Ana até Caio
                                    //adiciona onde foi retirado
nomes.splice(1,2, 'Jubarte');
//adiciona antonio no final do array
nomes.push('Antonio');
console.log(nomes);

const animaisDoAquario = ["baleia", "polvo", "golfinho", "tubarao"];

animaisDoAquario.splice(1,0, 'baiacu');
animaisDoAquario.splice(3,2, 'peixe');

console.log(animaisDoAquario);
