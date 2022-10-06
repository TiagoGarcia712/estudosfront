function somar(){
    let soma = 0;
    for(let i = 0; i < arguments.length; i++){
        soma += arguments[i];
    }
    return soma;
}

console.log(somar());
console.log(somar(2));
console.log(somar(2,5));
console.log(somar(4, 5, 4, 34, 5));
console.log(somar(2 , 5, 432, 34));

function imprime_valores(num1, num2){
    for(let i in arguments){
        console.log(arguments[i]);
    }
}

imprime_valores();
imprime_valores(4, 6);
imprime_valores(4, 6, 8);
imprime_valores(3, 6, 56, 75);

//Gambiarra n 1

function somar2(num1, num2, num3){
    num1 = num1 || 1;
    num2 = num2 || 2;
    num3 = num3 || 3;
    
    return num1 + num2 + num3;
}

console.log(somar2(4,5,6));
console.log(somar2(4,5));
console.log(somar2(4,5,6,3));

//Gambiarra n 2

function somar3(num1, num2, num3){
    num1 = isNaN(num1) ? 1 : num1;
    num2 = isNaN(num2) ? 2 : num2;
    num3 = isNaN(num3) ? 3 : num3;

    
    return num1 + num2 + num3;
}

console.log(somar3(4,5,6));
console.log(somar3(4,5));
console.log(somar3(4,5,6,3));
console.log(somar3(0,0,0));

// Forma correta

function somar4(num1 = 1, num2 = 2, num3 = 3){
    return num1 + num2 + num3;
}

console.log(somar4(4,5,6));
console.log(somar4(4,5));
console.log(somar4(4,5,6,3));
console.log(somar4(0,0,0));

console.log(somar4(false, false, false));


function somar5(num1 = 1, num2 = 2, num3 = 3){
    if(Number.isSafeInteger(num1) && Number.isSafeInteger(num2) && Number.isSafeInteger(num3)){
        return num1 + num2 + num3;
    }else{
        return 'Não foi possível efetuar a soma!';
    }
}

console.log(somar5(4,5,6));
console.log(somar5(4,5));
console.log(somar5(4,5,6,3));
console.log(somar5(0,0,0));

console.log(somar5(false, false, false));