const alunos = ['Gabriel', 'Amanda', 'Carlos', 'Sergio'];
const media = [8,7.5, 10, 7];
const situacao = ['aprovado','reprovado'];

const matrizMedias = [alunos, media, situacao];

// console.log(matrizMedias);

//
console.log('A aluna',matrizMedias[0][1],'tem a média de: ',
    matrizMedias[1][1], ',logo, seu status acadêmico é: ',matrizMedias[2][0]);