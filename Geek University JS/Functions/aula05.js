// FORMA 1

function somar1(num1, num2){
    return num1 + num2;
}

console.log(somar1(4,6));

// FORMA 2

let somar2 = function(num1, num2){
    return num1 + num2;
}

console.log(somar2(4,6));

// FORMA 3

let somar3 = somar1
console.log(somar3(4,6));

// ARROW FUNCTION

let somar4 = (num1, num2) => {
    return num1 + num2;
}

console.log(somar4(4,6));

// Caso a função tenha apenas 1 parâmetro de entrada e execute apenas uma linha, com Arrow Function ela fica muito simples:

let dobrar = valor => valor * 2;

console.log(dobrar(5));


function mensagem(){
    console.log('Evolua seu lado geek!');
}

mensagem()

const msg = () => console.log('Evolua seu lado geek!');

msg()