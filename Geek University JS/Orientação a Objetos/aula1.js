class Pessoa {
    constructor(nome, sobrenome){
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome(){
        return this._nome;
    }

    set nome(nome){
        this._nome = nome;
    }

    get sobrenome(){
        return this._sobrenome;
    }

    set sobrenome(sobrenome){
        this._sobrenome = sobrenome;
    }

    falar(msg){
        console.log(`${this.nome} está falando ${msg}`);
    }

    comer(){
        console.log(`${this.nome} está comendo...`);
    }

    beber(){
        console.log(`${this.nome} ${this.sobrenome} está bebendo...`);
    }
}

class Carro {
    constructor(modelo){
        this._marca = 'Honda';
        this._modelo = modelo;
    }

    get marca(){
        return this._marca;
    }

    get modelo(){
        return this._modelo;
    }

    set modelo(modelo){
        this._modelo = modelo;
    }



    imprimir(){
        console.log(`${this.marca} ${this.modelo}`);

    }
}

// Instanciando objetos - Forma 1

const curso = new Object();
curso.nome = 'Programação em JavaScript';
curso.preco = 27.99;

console.log(curso);

curso['qtd_alunos'] = 999;

console.log(curso);

delete curso['qtd_alunos'];
delete curso['preco'];

console.log(curso);

// Instanciando objetos - Forma 2 - Objeto literal

const programa = {
    nome:'Photoshop',
    preco: 8999.99,
    fabricante: {
        nome: 'Adobe',
        contato: 'contact@adobe.com',
        endereco: {
            rua: 'Da Paz, 45',
            bairro: 'Nova Lima',
            cidade: 'São Paulo'
        },
        filiais: [
            {cidade: 'Rio de Janeiro'},
            {cidade: 'Recife'}
        ]
    }
}
console.log(programa);

console.log(programa.nome);
console.log(programa.fabricante.nome);
console.log(programa.fabricante.filiais.length);
console.log(programa['fabricante']['filiais'].length);


// Instanciando Objetos - Forma 3 - Objeto Literal

