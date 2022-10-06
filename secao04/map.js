var valores = [2, 4, 6, 8, 10];
console.log(valores);

//map aplica uma função pra cada elemento do array, uma função lambda
var dobro = valores.map(function(valor){
    return valor * 2;
});

//console.log(dobro);

//Aplicação de vários maps com funções sem ser lambda pra manipular de diversas formas sequencialmente o mesmo elemento de array

function dobrar(valor){
    return valor * 2;
}

function soma_4(valor){
    return valor + 4;
}

function dividir_por_5(valor){
    return valor / 5;
}

var resultado = valores.map(dobrar).map(soma_4).map(dividir_por_5);
console.log(resultado);