class Catalogo {
    constructor() {
        this._jogos = [];
    }

    static getInstance() {
        if (!Catalogo._instance) {
            Catalogo._instance = new Catalogo();
        }
        return Catalogo._instance;
    }

    addJogo(jogo){
        this._jogos.push(jogo);
    }
}

class Jogo {
    constructor(nome, desenvolvedor, editora, preco){
        this._nome = nome;
        this._desenvolvedor = desenvolvedor;
        this._editora = editora;
        this._preco = preco;
    }
}

// Criando tres Catalogos
const catalogo1 = Catalogo.getInstance();
const catalogo2 = Catalogo.getInstance();
const catalogo3 = new Catalogo();

// Checando os catalogos antes de modificar
console.log('Catalogo 1 antes:', JSON.stringify(catalogo1));
console.log('Catalogo 2 antes:', JSON.stringify(catalogo2));
console.log('Catalogo 3 antes:', JSON.stringify(catalogo3));

// Modificando um catalogo
catalogo1.addJogo(new Jogo('Valorant', 'Riot Games', 'Riot Games', 'R$20,00'));

// Checando os catalogos depois de modificar
console.log('Catalogo 1 depois:', JSON.stringify(catalogo1));
console.log('Catalogo 2 depois:', JSON.stringify(catalogo2));
console.log('Catalogo 3 depois:', JSON.stringify(catalogo3));