-- CreateTable
CREATE TABLE "generos" (
    "idGenero" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeGenero" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "editoras" (
    "idEditora" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeEditora" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "desenvolvedoras" (
    "idDesenvolvedora" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeDesenvolvedora" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "recursos" (
    "idRecurso" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeRecurso" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "tipo" (
    "idTipo" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomeTipo" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "jogos" (
    "idJogo" TEXT NOT NULL PRIMARY KEY,
    "nomeJogo" TEXT NOT NULL,
    "precoJogo" REAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "dataLancamento" DATETIME NOT NULL,
    "dataLancamentoInicial" DATETIME NOT NULL,
    "desconto" REAL NOT NULL,
    "quantidadeVendido" INTEGER NOT NULL,
    "editoraId" INTEGER,
    "desenvolvedoraId" INTEGER,
    "plataforma" TEXT NOT NULL,
    "imagemCaminho" TEXT NOT NULL,
    CONSTRAINT "jogos_editoraId_fkey" FOREIGN KEY ("editoraId") REFERENCES "editoras" ("idEditora") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "jogos_desenvolvedoraId_fkey" FOREIGN KEY ("desenvolvedoraId") REFERENCES "desenvolvedoras" ("idDesenvolvedora") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "TipoJogo" (
    "idJogo" TEXT NOT NULL,
    "idTipo" INTEGER NOT NULL,

    PRIMARY KEY ("idJogo", "idTipo"),
    CONSTRAINT "TipoJogo_idJogo_fkey" FOREIGN KEY ("idJogo") REFERENCES "jogos" ("idJogo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "TipoJogo_idTipo_fkey" FOREIGN KEY ("idTipo") REFERENCES "tipo" ("idTipo") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "RecursoJogo" (
    "idJogo" TEXT NOT NULL,
    "idRecurso" INTEGER NOT NULL,

    PRIMARY KEY ("idJogo", "idRecurso"),
    CONSTRAINT "RecursoJogo_idJogo_fkey" FOREIGN KEY ("idJogo") REFERENCES "jogos" ("idJogo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "RecursoJogo_idRecurso_fkey" FOREIGN KEY ("idRecurso") REFERENCES "recursos" ("idRecurso") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "GeneroJogo" (
    "idJogo" TEXT NOT NULL,
    "idGenero" INTEGER NOT NULL,

    PRIMARY KEY ("idJogo", "idGenero"),
    CONSTRAINT "GeneroJogo_idJogo_fkey" FOREIGN KEY ("idJogo") REFERENCES "jogos" ("idJogo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "GeneroJogo_idGenero_fkey" FOREIGN KEY ("idGenero") REFERENCES "generos" ("idGenero") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pais" (
    "idPais" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomePais" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "clientes" (
    "idCliente" TEXT NOT NULL PRIMARY KEY,
    "nomeExibicao" TEXT NOT NULL,
    "dataNascimento" DATETIME NOT NULL,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "paisId" INTEGER,
    CONSTRAINT "clientes_paisId_fkey" FOREIGN KEY ("paisId") REFERENCES "Pais" ("idPais") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Pagamento" (
    "idPagamento" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nomePagamento" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Pedido" (
    "idPedido" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL,
    "clienteId" TEXT NOT NULL,
    "jogoId" TEXT NOT NULL,
    "dataPedido" DATETIME NOT NULL,
    "pagamentoId" INTEGER,
    CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes" ("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pedido_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "jogos" ("idJogo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pedido_pagamentoId_fkey" FOREIGN KEY ("pagamentoId") REFERENCES "Pagamento" ("idPagamento") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "NotaFiscal" (
    "idNota" TEXT NOT NULL PRIMARY KEY,
    "pedidoId" INTEGER NOT NULL,
    "ehFavorito" BOOLEAN,
    CONSTRAINT "NotaFiscal_pedidoId_fkey" FOREIGN KEY ("pedidoId") REFERENCES "Pedido" ("idPedido") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "generos_nomeGenero_key" ON "generos"("nomeGenero");

-- CreateIndex
CREATE UNIQUE INDEX "editoras_nomeEditora_key" ON "editoras"("nomeEditora");

-- CreateIndex
CREATE UNIQUE INDEX "desenvolvedoras_nomeDesenvolvedora_key" ON "desenvolvedoras"("nomeDesenvolvedora");

-- CreateIndex
CREATE UNIQUE INDEX "recursos_nomeRecurso_key" ON "recursos"("nomeRecurso");

-- CreateIndex
CREATE UNIQUE INDEX "tipo_nomeTipo_key" ON "tipo"("nomeTipo");

-- CreateIndex
CREATE UNIQUE INDEX "Pais_nomePais_key" ON "Pais"("nomePais");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_nomeExibicao_key" ON "clientes"("nomeExibicao");

-- CreateIndex
CREATE UNIQUE INDEX "clientes_email_key" ON "clientes"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Pagamento_nomePagamento_key" ON "Pagamento"("nomePagamento");

-- CreateIndex
CREATE UNIQUE INDEX "NotaFiscal_pedidoId_key" ON "NotaFiscal"("pedidoId");
