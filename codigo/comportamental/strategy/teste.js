// Teste da classe pedido para aplicação do Strategy Pattern

var Pedido = require('./pedido');


console.log('Iniciando novo pedido');

var valorTotal = 100;

var pedido = new Pedido( valorTotal);


pedido.realizarPagamento();
