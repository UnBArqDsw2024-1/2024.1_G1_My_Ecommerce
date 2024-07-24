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

    addJogoAoCarrinho(jogo) {
        this._jogos.push(jogo);
    }

    /*
    buscarJogo(nome) {
        return this._jogosPossuidos.find(jogo => jogo._nome === nome);
        }
        
    filtrarJogos(criterios) {
        return this._jogosPossuidos.filter(jogo => {
            return Object.keys(criterios).every(key => jogo[key] === criterios[key]);
            });
    }
    */

    get jogos() {
        return this._jogos;
    }
}

class Jogo {
    constructor(nome, desenvolvedor, editora, preco) {
        this._nome = nome;
        this._desenvolvedor = desenvolvedor;
        this._editora = editora;
        this._preco = preco;
    }
}

try {
    // Criando tres Catalogos
    const catalogo1 = Catalogo.getInstance();
    const catalogo2 = Catalogo.getInstance();
    const catalogo3 = new Catalogo(); // Este caso deve falhar

    // Checando os catalogos antes de modificar
    console.log('Catalogo 1 antes:', catalogo1.jogos);
    console.log('Catalogo 2 antes:', catalogo2.jogos);
    console.log('Catalogo 3 antes:', catalogo3.jogos);

    // Modificando um catalogo
    catalogo1.addJogoAoCarrinho(new Jogo('Valorant', 'Riot Games', 'Riot Games', 'R$20,00'));

    // Checando os catalogos depois de modificar
    console.log('Catalogo 1 depois:', catalogo1.jogos);
    console.log('Catalogo 2 depois:', catalogo2.jogos);
    console.log('Catalogo 3 depois:', catalogo3.jogos);
} catch (error) {
    console.error(error.message);
}
