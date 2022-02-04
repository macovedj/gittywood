/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropIndex
DROP INDEX "User_id_key";

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "Repository" (
    "url" TEXT NOT NULL,
    "numberOfShares" INTEGER NOT NULL,

    CONSTRAINT "Repository_pkey" PRIMARY KEY ("url")
);

-- CreateTable
CREATE TABLE "Owner" (
    "id" UUID NOT NULL,
    "userId" TEXT NOT NULL,
    "repositoryUrl" TEXT NOT NULL,
    "holdings" INTEGER NOT NULL,

    CONSTRAINT "Owner_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Repository_url_key" ON "Repository"("url");

-- CreateIndex
CREATE UNIQUE INDEX "Owner_id_key" ON "Owner"("id");

-- AddForeignKey
ALTER TABLE "Owner" ADD CONSTRAINT "Owner_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Owner" ADD CONSTRAINT "Owner_repositoryUrl_fkey" FOREIGN KEY ("repositoryUrl") REFERENCES "Repository"("url") ON DELETE RESTRICT ON UPDATE CASCADE;
