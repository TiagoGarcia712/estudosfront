let idade = 19;
const nome = 'Geek';


function soma_3(idade){
    return idade + 3;
}

console.log(nome + ' tem ' + idade + ' anos. ');

console.log(`${nome} tem ${idade + 3} anos.`);

console.log(`${nome} tem ${soma_3(idade)} anos.`);