-- CreateTable
CREATE TABLE "Mood" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT,
    "householdId" TEXT,
    "name" TEXT NOT NULL,
    "criteria" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Mood_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Mood_householdId_fkey" FOREIGN KEY ("householdId") REFERENCES "Household" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "Mood_name_idx" ON "Mood"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Mood_userId_name_key" ON "Mood"("userId", "name");

-- CreateIndex
CREATE UNIQUE INDEX "Mood_householdId_name_key" ON "Mood"("householdId", "name");
