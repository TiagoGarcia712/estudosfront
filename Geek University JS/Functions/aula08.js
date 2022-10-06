const cursos = [
    'Programação para leigos',
    'Algoritmos e Lógica de programação',
    'Programação em C',
    'Programação em Java',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript'
]

function apresentar(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
}

console.log('Usando CallBack');
cursos.forEach(apresentar);

console.log('Usando Lambda');
cursos.forEach(function(curso, indice){
    console.log(`${indice + 1} - ${curso}`);
})

console.log('Usando Arrow');
cursos.forEach((curso, indice) => console.log(`${indice + 1} - ${curso}`));


const precos = [23.55, 78.23, 899.43, 12.89, 5.23, 67.45];

//Forma 1

menores = precos.filter(function(preco){
    return preco < 50;
});

console.log(menores);

//Forma 2

menores = precos.filter(preco => preco < 50);

console.log(menores);