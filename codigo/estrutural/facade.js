class Catalogo {
    constructor() {
        this.jogos = [];
    }

    buscarJogo(nome) {
        return this.jogos.find(jogo => jogo.nome === nome);
    }

    filtrarJogos(precoCategoria, genero, recurso, evento, tipo, plataforma) {
        return this.jogos.filter(jogo =>
            (precoCategoria ? jogo.precoCategoria === precoCategoria : true) &&
            (genero ? jogo.genero === genero : true) &&
            (recurso ? jogo.recurso === recurso : true) &&
            (evento ? jogo.evento === evento : true) &&
            (tipo ? jogo.tipo === tipo : true) &&
            (plataforma ? jogo.plataforma === plataforma : true)
        );
    }
}

class Jogo {
    constructor(nome, desenvolvedor, editora, avaliacoes, descricao, dataLancamento, dataLancamentoInicial, preco, desconto, plataforma, generos, recursos, tipos, quantidadeVendido, requisitosSistema) {
        this.nome = nome;
        this.desenvolvedor = desenvolvedor;
        this.editora = editora;
        this.avaliacoes = avaliacoes;
        this.descricao = descricao;
        this.dataLancamento = dataLancamento;
        this.dataLancamentoInicial = dataLancamentoInicial;
        this.preco = preco;
        this.desconto = desconto;
        this.plataforma = plataforma;
        this.generos = generos;
        this.recursos = recursos;
        this.tipos = tipos;
        this.quantidadeVendido = quantidadeVendido;
        this.requisitosSistema = requisitosSistema;
    }

    addJogoAoCarrinho() {
        console.log(`${this.nome} adicionado ao carrinho`);
    }
}

class Carrinho {
    constructor() {
        this.jogos = [];
    }

    addJogo(jogo) {
        this.jogos.push(jogo);
        console.log(`${jogo.nome} foi adicionado ao carrinho.`);
    }

    calculaValorTotal() {
        return this.jogos.reduce((total, jogo) => total + jogo.preco, 0);
    }

    listaJogosSelecionados() {
        return this.jogos;
    }

    verificaSeTemOJogo(nome) {
        return this.jogos.some(jogo => jogo.nome === nome);
    }

    confirmarPedido() {
        return "Pedido confirmado!";
    }

}

class Pedido {
    constructor(numPedido, carrinho, formaPagamento) {
        this.numPedido = numPedido;
        this.status = false;
        this.descontoTotal = 0;
        this.precoTotal = carrinho.calculaValorTotal;
        this.formaPagamento = formaPagamento;
    }

    addBiblioteca() {
        this.jogos.push();
    }

    addQuantidadeVendido() {
        return "Quantidade vendida!"
    }

    enviarRecibo() {
        return "Recibo enviado!";
    }

    confirmarPedido() {
        this.status = true;
        return "Pedido confirmado!";
    }

    cancelarPedido() {
        this.status = false;
        return "Pedido cancelado!";
    }
}

class FormaPagamento {
    constructor(dataVencimento) {
        this.dataVencimento = dataVencimento
        if (new.target === FormaPagamento) {
            throw new Error("Não é possível instanciar a classe abstrata diretamente.");
        }
    }

    // Método abstrato
    cancelarPagamento() {
        throw new Error("Método 'cancelarPagamento()' deve ser implementado.");
    }

    confirmarPagamento() {
        throw new Error("Método 'confirmarPagamento()' deve ser implementado.");
    }
}

class LojaFacade {

    constructor() {
        this.catalogo = new Catalogo();
        this.carrinho = new Carrinho();
        this.pedido = null;
        this.formaPagamento = null;
        this.jogo = new Jogo();
    }

    buscarJogo(nome) {
        return this.catalogo.buscarJogo(nome);
    }

    filtrarJogos(categoria, genero, recurso, evento, tipo, plataforma) {
        return this.catalogo.filtrarJogos(categoria, genero, recurso, evento, tipo, plataforma);
    }

    addJogoAoCarrinho(nomeJogo) {
        const jogo = this.catalogo.buscarJogo(nomeJogo);
        if (jogo) {
            this.carrinho.addJogo(jogo);
        } else {
            console.log('Jogo não encontrado.');
        }
    }

    confirmarPedido() {
        this.pedido = new Pedido(new Date().getTime(), this.carrinho, this.formaPagamento);
        return this.pedido.confirmarPedido();
    }

    cancelarPedido() {
        return this.pedido.cancelarPedido();
    }

    cancelarPagamento() {
        return this.formaPagamento.cancelarPagamento();
    }
    
    confirmarPagamento() {
        return this.formaPagamento.confirmarPagamento();
    }

    adicionarJogoAoCatalogo(jogo) {
        return this.catalogo.jogos.push(jogo);
    }
}

// Classe Cliente
class Cliente {
    constructor(idCliente, nomeExibicao, pais, biblioteca, carrinho, dataNascimento) {
        this.idCliente = idCliente;
        this.nomeExibicao = nomeExibicao;
        this.pais = pais;
        this.biblioteca = biblioteca;
        this.carrinho = carrinho;
        this.dataNascimento = dataNascimento;
    }

    visualizarProdutos() {
        console.log("Visualizando produtos...");
    }
}

// Exemplo de uso - Criando um novo LojaFacade
const loja = new LojaFacade();
const jogo1 = new Jogo('Jogo 1', 'Desenvolvedor 1', 'Editora 1', [], 'Descrição 1', new Date(), new Date(), 50, 10, 'PC', ['Ação'], ['Online'], ['Singleplayer'], 100, {});
const jogo2 = new Jogo('Jogo 2', 'Desenvolvedor 2', 'Editora 2', [], 'Descrição 2', new Date(), new Date(), 60, 5, 'Console', ['RPG'], ['Multiplayer'], ['Multiplayer'], 200, {});

loja.adicionarJogoAoCatalogo(jogo1);
loja.adicionarJogoAoCatalogo(jogo2);

console.log("Loja antes: ", JSON.stringify(loja))

loja.addJogoAoCarrinho('Jogo 1');

console.log("Loja depois: ",JSON.stringify(loja))
console.log(loja.confirmarPedido());

// Testando o Cliente
const cliente = new Cliente('123', 'Nome Cliente', 'Brasil', [], loja.carrinho, new Date());
cliente.visualizarProdutos();