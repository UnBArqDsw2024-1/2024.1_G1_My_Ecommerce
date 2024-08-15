/*
  Warnings:

  - The primary key for the `FormaPagamento` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `FormaPagamento` table. All the data in the column will be lost.
  - The required column `idFormaPagamento` was added to the `FormaPagamento` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormaPagamento" (
    "idFormaPagamento" TEXT NOT NULL PRIMARY KEY,
    "dataVencimento" DATETIME NOT NULL,
    "pagamentoConfirmado" BOOLEAN NOT NULL,
    "tipo" TEXT,
    "numeroCartao" TEXT,
    "titular" TEXT,
    "cvc" TEXT,
    "validade" TEXT,
    "codigoBoleto" TEXT,
    "chavePix" TEXT
);
INSERT INTO "new_FormaPagamento" ("chavePix", "codigoBoleto", "cvc", "dataVencimento", "numeroCartao", "pagamentoConfirmado", "tipo", "titular", "validade") SELECT "chavePix", "codigoBoleto", "cvc", "dataVencimento", "numeroCartao", "pagamentoConfirmado", "tipo", "titular", "validade" FROM "FormaPagamento";
DROP TABLE "FormaPagamento";
ALTER TABLE "new_FormaPagamento" RENAME TO "FormaPagamento";
CREATE TABLE "new_Pedido" (
    "idPedido" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "status" TEXT NOT NULL,
    "dataPedido" DATETIME NOT NULL,
    "notaFiscal" TEXT,
    "clienteId" TEXT NOT NULL,
    "jogoId" TEXT NOT NULL,
    "formaPagamentoId" TEXT,
    CONSTRAINT "Pedido_clienteId_fkey" FOREIGN KEY ("clienteId") REFERENCES "clientes" ("idCliente") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pedido_jogoId_fkey" FOREIGN KEY ("jogoId") REFERENCES "jogos" ("idJogo") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Pedido_formaPagamentoId_fkey" FOREIGN KEY ("formaPagamentoId") REFERENCES "FormaPagamento" ("idFormaPagamento") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Pedido" ("clienteId", "dataPedido", "formaPagamentoId", "idPedido", "jogoId", "notaFiscal", "status") SELECT "clienteId", "dataPedido", "formaPagamentoId", "idPedido", "jogoId", "notaFiscal", "status" FROM "Pedido";
DROP TABLE "Pedido";
ALTER TABLE "new_Pedido" RENAME TO "Pedido";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
