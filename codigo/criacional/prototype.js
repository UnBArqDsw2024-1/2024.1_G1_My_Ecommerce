class Jogo {
    constructor(nome, desenvolvedor, editora, preco){
        this._nome = nome;
        this._desenvolvedor = desenvolvedor;
        this._editora = editora;
        this._preco = preco;
    }

    clone() {
        return new Jogo(this._nome, this._desenvolvedor, this._editora, this._preco);
    }

    setPreco(valor) {
        this._preco = valor;
    }

}

class Biblioteca {
    constructor(){
        this._jogosPossuidos = [];
        this._favoritos = [];
        this._instalados = [];
    }

    addJogo(jogo){
        this._jogosPossuidos.push(jogo.clone());
    }
}

// Criação de biblioteca e jogo do catalogo
const biblioteca = new Biblioteca();
const valorantCatalogo = new Jogo('Valorant', 'Riot Games', 'Riot Games', 'R$20,00');

// Comparar biblioteca e clonar jogo
console.log('Biblioteca Antes:', JSON.stringify(biblioteca));
biblioteca.addJogo(valorantCatalogo);
console.log('Biblioteca Depois:', JSON.stringify(biblioteca));

// Modificar jogo clonado
const valorantClonado = biblioteca._jogosPossuidos[0];
valorantClonado.setPreco("R$1.000,00");

// Comparar jogo original com o jogo clonado
console.log('Jogo original:', JSON.stringify(valorantCatalogo));
console.log('Jogo clonado:', JSON.stringify(valorantClonado));
