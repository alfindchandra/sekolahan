/*
  Warnings:

  - A unique constraint covering the columns `[nim]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "users_nim_key" ON "users"("nim");
