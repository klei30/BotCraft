-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_OpenGptApp" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "hint" TEXT,
    "demoInput" TEXT NOT NULL,
    "shouldHide" BOOLEAN NOT NULL DEFAULT false,
    "prompt" TEXT NOT NULL,
    "usedCount" BIGINT NOT NULL DEFAULT 1,
    "paidUseCount" BIGINT NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_OpenGptApp" ("createdAt", "demoInput", "description", "hint", "icon", "id", "name", "paidUseCount", "prompt", "updatedAt", "usedCount") SELECT "createdAt", "demoInput", "description", "hint", "icon", "id", "name", "paidUseCount", "prompt", "updatedAt", "usedCount" FROM "OpenGptApp";
DROP TABLE "OpenGptApp";
ALTER TABLE "new_OpenGptApp" RENAME TO "OpenGptApp";
CREATE UNIQUE INDEX "OpenGptApp_name_key" ON "OpenGptApp"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
