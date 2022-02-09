/*
  Warnings:

  - You are about to drop the column `repositoryUrl` on the `Owner` table. All the data in the column will be lost.
  - The primary key for the `Repository` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[githubUUID]` on the table `User` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Repository` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `githubUUID` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Owner_id_key";

-- AlterTable
ALTER TABLE "Owner" DROP COLUMN "repositoryUrl",
ADD COLUMN     "repositoryId" TEXT,
ALTER COLUMN "holdings" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Repository" DROP CONSTRAINT "Repository_pkey",
ADD COLUMN     "id" TEXT NOT NULL,
ALTER COLUMN "numberOfShares" SET DEFAULT 0,
ADD CONSTRAINT "Repository_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "githubUUID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "User_githubUUID_key" ON "User"("githubUUID");

-- AddForeignKey
ALTER TABLE "Owner" ADD CONSTRAINT "Owner_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repository"("id") ON DELETE SET NULL ON UPDATE CASCADE;
