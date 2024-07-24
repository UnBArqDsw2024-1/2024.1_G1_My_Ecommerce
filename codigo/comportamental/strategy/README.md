# README - Strategy

### 🖥️Instruções de Uso

- Inicialmente instale o node:  `npm install`
- Para executar o script, copie o código e cole no seu terminal: `node teste.js`
- Ao executar o script `teste.js`, você será guiado para realizar um pagamento simulado. Aqui está como o processo pode ser interativo:

### 💲Iniciando novo pedido

- Escolha uma opção: (por exemplo, digite 2 para escolher Cartão de crédito)

```bash
    Escolha a forma de pagamento
    1 - Boleto
    2 - Cartão de crédito
    3 - Pix
    Escolha uma opção: 2
```

- Caso a forma de pagamento escolhida tenha sido Cartão de Crédito, o sistema irá pedir as seguintes informações:

```bash
    Digite o número do cartão: 5399876624540001
    Digite o nome do titular do cartão: FULANO DE TAL
    Digite o código de segurança (CVC): 526
    Digite a validade do cartão: 30/2026
```

- No exemplo anterior, foi utilizado números fictícios para cada uma das informações. Após inserir as informações pessoais do cartão de crédito, a confirmação será retornada:

```python
Número do cartão: 5399876624540001
Pagamento gerado com sucesso!
```