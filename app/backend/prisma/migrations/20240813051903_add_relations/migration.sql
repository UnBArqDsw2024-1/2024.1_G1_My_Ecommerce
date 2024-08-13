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
    CONSTRAINT "jogos_editoraId_fkey" FOREIGN KEY ("editoraId") REFERENCES "editoras" ("idEditora") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "jogos_desenvolvedoraId_fkey" FOREIGN KEY ("desenvolvedoraId") REFERENCES "desenvolvedoras" ("idDesenvolvedora") ON DELETE SET NULL ON UPDATE CASCADE
);

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
