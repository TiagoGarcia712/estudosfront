let xuxa = 'global'; // pode ser acessada globalmente no nosso projeto

function imprimir(){
    console.log(xuxa);
}

function outra(){
    let xuxa = 'local'; // pode ser acessada localmente no bloco / contexto
    imprimir();
    console.log(xuxa); // ??
}


outra(); // ??


let v = 'global';

function externa(){
    let v = 'local';

    function interna(){
        return v;
    }

    return interna;
}

let executa = externa();

console.log(executa());

/*
    Estamos rstudando Closures (contexto léxico de uma função)

    
*/