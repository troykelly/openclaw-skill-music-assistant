-- CreateTable
CREATE TABLE "HaConfigEntryCache" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "domain" TEXT NOT NULL,
    "entryId" TEXT NOT NULL,
    "title" TEXT,
    "haUrl" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "HaConfigEntryCache_domain_idx" ON "HaConfigEntryCache"("domain");

-- CreateIndex
CREATE UNIQUE INDEX "HaConfigEntryCache_haUrl_domain_entryId_key" ON "HaConfigEntryCache"("haUrl", "domain", "entryId");
