/*
  Warnings:

  - You are about to drop the `NotaFiscal` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "Pedido" ADD COLUMN "notaFiscal" TEXT;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "NotaFiscal";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "FormaPagamento" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "dataVencimento" DATETIME NOT NULL,
    "tipo" TEXT,
    "numeroCartao" TEXT,
    "titular" TEXT,
    "cvc" TEXT,
    "validade" TEXT,
    "codigoNumerico" TEXT,
    "chavePix" TEXT
);
