-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(180) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `cell_phone` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `users_email_key`(`email`),
    UNIQUE INDEX `users_cell_phone_key`(`cell_phone`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `addresses` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `street` VARCHAR(90) NOT NULL,
    `city` VARCHAR(120) NOT NULL,
    `state` VARCHAR(2) NOT NULL,
    `user_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `animals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(180) NOT NULL,
    `description` VARCHAR(400) NOT NULL,
    `gender` ENUM('MACHO', 'FEMEA') NOT NULL,
    `user_id` INTEGER NOT NULL,
    `breed_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `type_of_animals` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(180) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `breeds` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(180) NOT NULL,
    `animal_type_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `donations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `status` BOOLEAN NOT NULL DEFAULT false,
    `userId` INTEGER NOT NULL,
    `animalId` INTEGER NOT NULL,

    UNIQUE INDEX `donations_animalId_key`(`animalId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
