-- CreateTable
CREATE TABLE `Contact` (
    `id` VARCHAR(191) NOT NULL,
    `first` VARCHAR(191) NOT NULL,
    `last` VARCHAR(191) NOT NULL,
    `avatar` VARCHAR(191) NOT NULL,
    `twitter` VARCHAR(191) NOT NULL,
    `notes` VARCHAR(191) NOT NULL,
    `favorite` BOOLEAN NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
