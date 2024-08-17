/*
  Warnings:

  - You are about to drop the `Pagamento` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `codigoNumerico` on the `FormaPagamento` table. All the data in the column will be lost.
  - You are about to drop the column `pagamentoId` on the `Pedido` table. All the data in the column will be lost.
  - Added the required column `pagamentoConfirmado` to the `FormaPagamento` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Pagamento_nomePagamento_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Pagamento";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormaPagamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
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
INSERT INTO "new_FormaPagamento" ("chavePix", "cvc", "dataVencimento", "id", "numeroCartao", "tipo", "titular", "validade") SELECT "chavePix", "cvc", "dataVencimento", "id", "numeroCartao", "tipo", "titular", "validade" FROM "FormaPagamento";
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
    CONSTRAINT "Pedido_formaPagamentoId_fkey" FOREIGN KEY ("formaPagamentoId") REFERENCES "FormaPagamento" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_Pedido" ("clienteId", "dataPedido", "idPedido", "jogoId", "notaFiscal", "status") SELECT "clienteId", "dataPedido", "idPedido", "jogoId", "notaFiscal", "status" FROM "Pedido";
DROP TABLE "Pedido";
ALTER TABLE "new_Pedido" RENAME TO "Pedido";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
