/*
  Warnings:

  - Added the required column `day` to the `Days` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Days" ADD COLUMN     "day" TEXT NOT NULL;
