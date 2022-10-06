function calcular_idade(ano_nascimento){
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento;

    return idade;
}

function calcular_idade2(ano_nascimento){
    const data = new Date();

    const idade = data.getFullYear() - ano_nascimento;

    console.log(idade);
}



let ret = calcular_idade(1998);
console.log(ret);

calcular_idade2(1998);

const data = new Date();

console.log('Data Completa: ' + data);

console.log('Ano: ' + data.getFullYear());

console.log('Mês: ' + data.getMonth());

function somar(num1, num2){
    return num1 + num2;
}

console.log(somar(4,6));
console.log(somar(4));
console.log(somar(4,6,8));
console.log(somar(4,6,8,10,12,13,14));