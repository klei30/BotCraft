-- CreateTable
CREATE TABLE "OpenGptApp" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "icon" TEXT NOT NULL,
    "hint" TEXT,
    "demoInput" TEXT NOT NULL,
    "prompt" TEXT NOT NULL,
    "usedCount" BIGINT NOT NULL DEFAULT 1,
    "paidUseCount" BIGINT NOT NULL DEFAULT 0,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "OpenGptApp_name_key" ON "OpenGptApp"("name");
