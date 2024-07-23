class Jogo {
    constructor(nome, desenvolvedor, editora, avaliacoes, descricao, dataLancamento, preco, plataforma, generos, recursos, tipos, quantidadeVendido, requisitosSistema) {
        this.nome = nome
        this.desenvolvedor = desenvolvedor 
        this.editora = editora
        this.avaliacoes = avaliacoes 
        this.descricao = descricao
        this.dataLancamento = dataLancamento 
        this.preco = preco
        this.plataforma = plataforma 
        this.generos = generos
        this.recursos = recursos 
        this.tipos = tipos
        this.quantidadeVendido = quantidadeVendido 
        this.requisitosSistema = requisitosSistema
       
        if (new.target === Jogo) {
            throw new Error("Não é possível instanciar a classe abstrata diretamente.");
        }
    }

    addJogoAoCarrinho() {
      console.log(`Adicionando ${this.nome} ao carrinho.`);
      console.log(`Preço total: R$ ${this.preco.toFixed(2)}`);
      // throw new Error("Método 'addJogoAoCarrinho()' deve ser implementado.");
    }
}

class JogoConcreto extends Jogo {
    constructor(nome, desenvolvedor, editora, avaliacoes, descricao, dataLancamento, preco, plataforma, generos, recursos, tipos, quantidadeVendido, requisitosSistema) {
      super(nome, desenvolvedor, editora, avaliacoes, descricao, dataLancamento, preco, plataforma, generos, recursos, tipos, quantidadeVendido, requisitosSistema);
    }
}

// Interface Jogo
class JogoDecorator {
    constructor(jogo) {
      super(jogo.nome, jogo.desenvolvedor, jogo.editora, jogo.avaliacoes, jogo.descricao, jogo.dataLancamento, jogo.preco, jogo.plataforma, jogo.generos, jogo.recursos, jogo.tipos, jogo.quantidadeVendido, jogo.requisitosSistema);
      this.jogo = jogo;
    }

    addJogoAoCarrinho() {
      this.jogo.addJogoAoCarrinho();
    }
}

class JogoDescontoPercentual extends JogoDecorator {
    constructor(jogo, descontoPercentual) {
      super(jogo);
      this.descontoPercentual;
    }

    addJogoAoCarrinho() {
      this.jogo.addJogoAoCarrinho();
      console.log(`Desconto: ${this.descontoPercentual}`)
    }
}


class JogoDescontoFixo extends JogoDecorator {
  constructor(jogo, descontoFixo) {
    super(jogo);
    this.descontoFixo;
  }

  addJogoAoCarrinho() {
    this.jogo.addJogoAoCarrinho();
    console.log(`Desconto: R$ ${this.descontoFixo}`)
  }
}
  
  
  // Exemplo de uso
  const jogoBase = new JogoConcreto("The Witcher 3", 50.00, "CD Projekt Red", "CD Projekt");
  const jogoDescontoPercentual = new JogoDescontoPercentual(jogoBase, 20);
  const jogoDescontoFixo = new JogoDescontoFixo(jogoBase, 10);
  
  console.log("--- Adicionando jogo com desconto percentual ---");
  jogoDescontoPercentual.addJogoAoCarrinho();
  
  console.log("\n--- Adicionando jogo com desconto fixo ---");
  jogoDescontoFixo.addJogoAoCarrinho();
  