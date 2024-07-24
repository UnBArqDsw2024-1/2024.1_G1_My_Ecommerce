// Interface ObservadorDesconto
class ObservadorDesconto {
    atualizar(jogo, novoPreco) {
        throw new Error("Este método deve ser implementado.");
    }
}

class Jogo {
    constructor(nome, desenvolvedor, editora, preco, descricao, dataLancamento, plataforma, generos, recursos, tipos, quantidadeVendido, requisitosSistema) {
        this.nome = nome;
        this.desenvolvedor = desenvolvedor;
        this.editora = editora;
        this.preco = preco;
        this.descricao = descricao;
        this.dataLancamento = dataLancamento;
        this.plataforma = plataforma;
        this.generos = generos;
        this.recursos = recursos;
        this.tipos = tipos;
        this.quantidadeVendido = quantidadeVendido;
        this.requisitosSistema = requisitosSistema;
        this.observadores = [];
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

    observar(observador) {
        if (observador instanceof ObservadorDesconto) {
            this.observadores.push(observador);
        } else {
            throw new Error("Observador deve implementar a interface ObservadorDesconto.");
        }
    }

    pararObservar(observador) {
        this.observadores = this.observadores.filter(obs => obs !== observador);
    }

    notificarObservadores() {
        this.observadores.forEach(observador => observador.atualizar(this, this.preco));
    }

    setDesconto(percentualDesconto) {
        const novoPreco = this.preco - (this.preco * (percentualDesconto / 100));
        this.preco = novoPreco;
        this.notificarObservadores();
    }
}

class Cliente extends ObservadorDesconto {
    constructor(nome, email, senha, idCliente, nomeExibicao, pais, dataNascimento) {
        super();
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.idCliente = idCliente;
        this.nomeExibicao = nomeExibicao;
        this.pais = pais;
        this.dataNascimento = dataNascimento;
        this.biblioteca = new Biblioteca(this);
        // this.carrinho = new Carrinho();
    }

    atualizar(jogo, novoPreco) {
        console.log(`Cliente ${this.nomeExibicao} foi notificado sobre um desconto no jogo ${jogo.nome}: Novo preço R$${novoPreco.toFixed(2)}`);
    }
}

class Biblioteca {
    constructor(cliente) {
        this.cliente = cliente;
        this.jogosPossuidos = [];
        this.instalados = [];
        this.favoritos = [];
        this.listaDeDesejos = [];
    }

    listarListaDeDesejos() {
        return this.listaDeDesejos;
    }

    addJogoDesejado(jogo) {
        this.listaDeDesejos.push(jogo);
        jogo.observar(this.cliente);
    }

    removerJogoDesejado(jogo) {
        this.listaDeDesejos = this.listaDeDesejos.filter(j => j !== jogo);
        jogo.pararObservar(this.cliente);
    }
}

try {
    // Criação de um cliente
    const cliente1 = new Cliente('João Morbeck', 'joao@example.com', 'senha123', '123', 'joaoM', 'Brasil', new Date('1990-01-01'));
    const cliente2 = new Cliente('Raquel Eucaria', 'raquel@example.com', 'senha123', '123', 'raqEu', 'Brasil', new Date('1990-01-01'));

    // Criação de um jogo no catálogo
    const jogoCatalogo = new Jogo(
        'Valorant', 'Riot Games', 'Riot Games', 20.00,
        'Jogo de tiro em primeira pessoa', new Date('2020-06-02'), 'PC',
        ['FPS', 'Multiplayer'], ['Cross-Platform', 'Voice Chat'],
        'Free-to-Play', 1000000, { OS: 'Windows', RAM: '4GB' }
    );

    console.log(`Preço atual do jogo: R$${jogoCatalogo.preco.toFixed(2)}`);

    // Cliente adiciona o jogo à lista de desejos
    cliente1.biblioteca.addJogoDesejado(jogoCatalogo);
    cliente2.biblioteca.addJogoDesejado(jogoCatalogo);

    // Aplicar desconto ao jogo
    jogoCatalogo.setDesconto(50);  // Aplica 50% de desconto

    // Verificar se o cliente foi notificado
    // console.log(`Novo preço do jogo: R$${jogoCatalogo.preco.toFixed(2)}`);

    // Remove jogo da lista de desejos
    cliente2.biblioteca.removerJogoDesejado(jogoCatalogo);

    jogoCatalogo.setDesconto(5);  // Aplica 5% de desconto

} catch (error) {
    console.error(error.message);
}
