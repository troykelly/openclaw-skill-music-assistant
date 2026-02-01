-- CreateTable
CREATE TABLE "Household" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Preference" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "householdId" TEXT,
    "entityType" TEXT NOT NULL,
    "entityId" TEXT NOT NULL,
    "score" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Preference_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Preference_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "Household" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Household_slug_key" ON "Household"("slug");

-- CreateIndex
CREATE INDEX "Preference_entityType_entityId_idx" ON "Preference"("entityType", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "Preference_userId_entityType_entityId_key" ON "Preference"("userId", "entityType", "entityId");

-- CreateIndex
CREATE UNIQUE INDEX "Preference_householdId_entityType_entityId_key" ON "Preference"("householdId", "entityType", "entityId");
