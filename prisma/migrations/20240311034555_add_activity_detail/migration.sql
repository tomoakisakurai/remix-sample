-- CreateTable
CREATE TABLE `ActivityDetail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `activityId` INTEGER NOT NULL,
    `dateTime` DATETIME(3) NULL,
    `duration` VARCHAR(191) NULL,
    `ageLimit` VARCHAR(191) NULL,
    `servicesIncluded` VARCHAR(191) NULL,
    `itemsRequired` VARCHAR(191) NULL,
    `notes` VARCHAR(191) NULL,

    UNIQUE INDEX `ActivityDetail_activityId_key`(`activityId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ActivityDetail` ADD CONSTRAINT `ActivityDetail_activityId_fkey` FOREIGN KEY (`activityId`) REFERENCES `Activity`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
