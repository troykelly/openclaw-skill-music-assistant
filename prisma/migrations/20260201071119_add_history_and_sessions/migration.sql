-- CreateTable
CREATE TABLE "ListeningSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "speakerEntityId" TEXT NOT NULL,
    "moodName" TEXT,
    "playlistUri" TEXT,
    "radioCriteria" TEXT,
    "startedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endedAt" DATETIME,
    CONSTRAINT "ListeningSession_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "AvoidTrack" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "reason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "AvoidTrack_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_PlayEvent" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "profileId" TEXT,
    "sessionId" TEXT,
    "speakerEntityId" TEXT NOT NULL,
    "uri" TEXT NOT NULL,
    "title" TEXT,
    "artist" TEXT,
    "album" TEXT,
    "playlistUri" TEXT,
    "radioStationUri" TEXT,
    "durationMs" INTEGER,
    "skipped" BOOLEAN NOT NULL DEFAULT false,
    "skipReason" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "PlayEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "PlayEvent_profileId_fkey" FOREIGN KEY ("profileId") REFERENCES "Profile" ("id") ON DELETE SET NULL ON UPDATE CASCADE,
    CONSTRAINT "PlayEvent_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "ListeningSession" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_PlayEvent" ("album", "artist", "createdAt", "id", "profileId", "speakerEntityId", "title", "uri", "userId") SELECT "album", "artist", "createdAt", "id", "profileId", "speakerEntityId", "title", "uri", "userId" FROM "PlayEvent";
DROP TABLE "PlayEvent";
ALTER TABLE "new_PlayEvent" RENAME TO "PlayEvent";
CREATE INDEX "PlayEvent_userId_createdAt_idx" ON "PlayEvent"("userId", "createdAt");
CREATE INDEX "PlayEvent_speakerEntityId_createdAt_idx" ON "PlayEvent"("speakerEntityId", "createdAt");
CREATE INDEX "PlayEvent_sessionId_idx" ON "PlayEvent"("sessionId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "ListeningSession_userId_startedAt_idx" ON "ListeningSession"("userId", "startedAt");

-- CreateIndex
CREATE INDEX "ListeningSession_speakerEntityId_startedAt_idx" ON "ListeningSession"("speakerEntityId", "startedAt");

-- CreateIndex
CREATE UNIQUE INDEX "AvoidTrack_userId_uri_key" ON "AvoidTrack"("userId", "uri");
