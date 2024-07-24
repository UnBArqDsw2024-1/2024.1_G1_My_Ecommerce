class Prototype {
    clone() {
        throw new Error("O método clone() precisa ser implementado");
    }
}

class Jogo {
    constructor(nome, desenvolvedor, editora, preco, descricao, dataLancamento, plataforma, generos, recursos, tipos, quantidadeVendido, requisitosSistema) {
        this._nome = nome;
        this._desenvolvedor = desenvolvedor;
        this._editora = editora;
        this._preco = preco;
        this._descricao = descricao;
        this._dataLancamento = dataLancamento;
        this._plataforma = plataforma;
        this._generos = generos;
        this._recursos = recursos;
        this._tipos = tipos;
        this._quantidadeVendido = quantidadeVendido;
        this._requisitosSistema = requisitosSistema;
    }
    


    clone() {
        return new Jogo(
            this._nome,
            this._desenvolvedor,
            this._editora,
            this._preco,
            this._descricao,
            this._dataLancamento,
            this._plataforma,
            [...this._generos],
            [...this._recursos],
            this._tipos,
            this._quantidadeVendido,
            { ...this._requisitosSistema }
        );
    }

    // Getters para acessar os atributos
    get nome() { return this._nome; }
    get desenvolvedor() { return this._desenvolvedor; }
    get editora() { return this._editora; }
    get preco() { return this._preco; }
    get descricao() { return this._descricao; }
    get dataLancamento() { return this._dataLancamento; }
    get plataforma() { return this._plataforma; }
    get generos() { return this._generos; }
    get recursos() { return this._recursos; }
    get tipos() { return this._tipos; }
    get quantidadeVendido() { return this._quantidadeVendido; }
    get requisitosSistema() { return this._requisitosSistema; }

    // Setter para o preço
    set preco(valor) {
        this._preco = valor;
    }
}


class Biblioteca {
    constructor() {
        this._jogosPossuidos = [];
        this._favoritos = [];
        this._instalados = [];
    }

    // listarInstalados() { return this._instalados; }

    // listarFavoritos() { return this._favoritos; }

    // buscarJogo(nome) {
    //     return this._jogosPossuidos.find(jogo => jogo._nome === nome);
    // }

    /* filtrarJogos(criterios) {
        return this._jogosPossuidos.filter(jogo => {
            return Object.keys(criterios).every(key => jogo[key] === criterios[key]);
        });
    } */

    // Getter para acessar a lista de jogos
    get jogosPossuidos() { return this._jogosPossuidos; }

    // Setter para adicionar jogo a lista
    set addJogo(jogo) {
        this._jogosPossuidos.push(jogo.clone());
    }
}

try {
    // Criação de biblioteca e jogo do catalogo
    const biblioteca = new Biblioteca();
    const valorantCatalogo = new Jogo(
        'Valorant', 'Riot Games', 'Riot Games', 'R$20,00',
        'Jogo de tiro em primeira pessoa', new Date('2020-06-02'), 'PC',
        ['FPS', 'Multiplayer'], ['Cross-Platform', 'Voice Chat'],
        'Free-to-Play', 1000000, { OS: 'Windows', RAM: '4GB' }
    );

    // Comparar biblioteca e clonar jogo
    console.log('Biblioteca Antes:', biblioteca.jogosPossuidos);
    biblioteca.addJogo = valorantCatalogo;
    console.log('Biblioteca Depois:', biblioteca.jogosPossuidos);

    // Modificar jogo clonado
    const valorantClonado = biblioteca.jogosPossuidos[0];
    valorantClonado.preco = "R$1.000,00";

    // Comparar jogo original com o jogo clonado
    console.log('Jogo original:', {
        nome: valorantCatalogo.nome,
        desenvolvedor: valorantCatalogo.desenvolvedor,
        editora: valorantCatalogo.editora,
        preco: valorantCatalogo.preco,
        descricao: valorantCatalogo.descricao,
        dataLancamento: valorantCatalogo.dataLancamento,
        plataforma: valorantCatalogo.plataforma,
        generos: valorantCatalogo.generos,
        recursos: valorantCatalogo.recursos,
        tipos: valorantCatalogo.tipos,
        quantidadeVendido: valorantCatalogo.quantidadeVendido,
        requisitosSistema: valorantCatalogo.requisitosSistema
    });

    console.log('Jogo clonado:', {
        nome: valorantClonado.nome,
        desenvolvedor: valorantClonado.desenvolvedor,
        editora: valorantClonado.editora,
        preco: valorantClonado.preco,
        descricao: valorantClonado.descricao,
        dataLancamento: valorantClonado.dataLancamento,
        plataforma: valorantClonado.plataforma,
        generos: valorantClonado.generos,
        recursos: valorantClonado.recursos,
        tipos: valorantClonado.tipos,
        quantidadeVendido: valorantClonado.quantidadeVendido,
        requisitosSistema: valorantClonado.requisitosSistema
    });
} catch (error) {
    console.error(error.message);
}

