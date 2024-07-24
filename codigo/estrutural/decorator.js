// Interface Jogo
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
      throw new Error("Método 'addJogoAoCarrinho()' deve ser implementado.");
    }
}

// Componente concreto representando um Jogo Basico
class JogoBasico extends Jogo {
    constructor(nome, desenvolvedor, editora, avaliacoes, descricao, dataLancamento, preco, plataforma, generos, recursos, tipos, quantidadeVendido, requisitosSistema) {
      super(nome, desenvolvedor, editora, avaliacoes, descricao, dataLancamento, preco, plataforma, generos, recursos, tipos, quantidadeVendido, requisitosSistema);
    }

    addJogoAoCarrinho() {
      console.log(`Adicionando ${this.nome} ao carrinho.`);
      console.log(`Preço total: R$ ${this.preco.toFixed(2)}`);
    }
}

// Classe Decorator implementando a interface Jogo
class JogoDecorator extends Jogo {
    constructor(jogo) {
      super(jogo.nome, jogo.desenvolvedor, jogo.editora, jogo.avaliacoes, jogo.descricao, jogo.dataLancamento, jogo.preco, jogo.plataforma, jogo.generos, jogo.recursos, jogo.tipos, jogo.quantidadeVendido, jogo.requisitosSistema);
      this.jogo = jogo;

      if (new.target === JogoDecorator) {
        throw new Error("Não é possível instanciar a classe abstrata diretamente.");
      }
    }
    
    addJogoAoCarrinho() {
      this.jogo.addJogoAoCarrinho();
    }
}

// Classe adicionando o desconto percentual e atualizando preco
class JogoDescontoPercentual extends JogoDecorator {
    constructor(jogo, descontoPercentual) {
      super(jogo);
      this.descontoPercentual = descontoPercentual;
      this.preco = jogo.preco - jogo.preco * this.descontoPercentual/100 
    }

    addJogoAoCarrinho() {
      this.jogo.addJogoAoCarrinho();
      console.log(`Desconto: ${this.descontoPercentual}%`)
      console.log(`Preço Atual: ${this.preco}`)
    }
}

// Classe adicionando o desconto fixo e atualizando preco
class JogoDescontoFixo extends JogoDecorator {
  constructor(jogo, descontoFixo) {
    super(jogo);
    this.descontoFixo = descontoFixo;
    this.preco = jogo.preco - this.descontoFixo
  }

  addJogoAoCarrinho() {
    this.jogo.addJogoAoCarrinho();
    console.log(`Desconto: R$${this.descontoFixo}`)
    console.log(`Preço Atual: ${this.preco}`)
  }
}
  
  
// Exemplo de uso
const jogoBase = new JogoBasico();

jogoBase.nome="The Witcher 3"
jogoBase.preco=50.00
jogoBase.desenvolvedor="CD Projekt Red"
jogoBase.editora="CD Projekt"

const jogoDescontoPercentual = new JogoDescontoPercentual(jogoBase, 30);
const jogoDescontoFixo = new JogoDescontoFixo(jogoBase, 10);

// Prints
console.log("--- Adicionando jogo com desconto percentual ---");
jogoDescontoPercentual.addJogoAoCarrinho();

console.log("\n--- Adicionando jogo com desconto fixo ---");
jogoDescontoFixo.addJogoAoCarrinho();

console.log("\n------");
console.log(`Jogo Base: ${jogoBase.preco}`);
console.log(`Jogo Desc Fixo: ${jogoDescontoFixo.preco}`);
console.log(`Jogo Desc Percentual: ${jogoDescontoPercentual.preco}%`);
  
