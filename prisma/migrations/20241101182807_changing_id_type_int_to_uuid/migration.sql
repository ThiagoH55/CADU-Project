/*
  Warnings:

  - The primary key for the `addresses` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `animals` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `breeds` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `donations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `type_of_animals` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `users` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `addresses` DROP FOREIGN KEY `addresses_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `animals` DROP FOREIGN KEY `animals_breed_id_fkey`;

-- DropForeignKey
ALTER TABLE `animals` DROP FOREIGN KEY `animals_user_id_fkey`;

-- DropForeignKey
ALTER TABLE `breeds` DROP FOREIGN KEY `breeds_animal_type_id_fkey`;

-- DropForeignKey
ALTER TABLE `donations` DROP FOREIGN KEY `donations_animalId_fkey`;

-- DropForeignKey
ALTER TABLE `donations` DROP FOREIGN KEY `donations_userId_fkey`;

-- AlterTable
ALTER TABLE `addresses` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `user_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `animals` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `user_id` VARCHAR(191) NOT NULL,
    MODIFY `breed_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `breeds` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `animal_type_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `donations` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `userId` VARCHAR(191) NOT NULL,
    MODIFY `animalId` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `type_of_animals` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `users` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `addresses` ADD CONSTRAINT `addresses_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `animals` ADD CONSTRAINT `animals_breed_id_fkey` FOREIGN KEY (`breed_id`) REFERENCES `breeds`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `breeds` ADD CONSTRAINT `breeds_animal_type_id_fkey` FOREIGN KEY (`animal_type_id`) REFERENCES `type_of_animals`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `donations` ADD CONSTRAINT `donations_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `donations` ADD CONSTRAINT `donations_animalId_fkey` FOREIGN KEY (`animalId`) REFERENCES `animals`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
