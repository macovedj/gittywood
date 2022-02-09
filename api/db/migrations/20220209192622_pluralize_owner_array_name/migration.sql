/*
  Warnings:

  - Made the column `repositoryId` on table `Owner` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Owner" DROP CONSTRAINT "Owner_repositoryId_fkey";

-- AlterTable
ALTER TABLE "Owner" ALTER COLUMN "repositoryId" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Owner" ADD CONSTRAINT "Owner_repositoryId_fkey" FOREIGN KEY ("repositoryId") REFERENCES "Repository"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
