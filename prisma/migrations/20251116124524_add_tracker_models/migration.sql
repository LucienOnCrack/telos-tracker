-- CreateTable
CREATE TABLE "tracker_locations" (
    "id" TEXT NOT NULL,
    "trackerId" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "tracker_locations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tracker_state" (
    "id" TEXT NOT NULL,
    "trackerId" TEXT NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tracker_state_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "tracker_locations_trackerId_idx" ON "tracker_locations"("trackerId");

-- CreateIndex
CREATE INDEX "tracker_locations_timestamp_idx" ON "tracker_locations"("timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "tracker_state_trackerId_key" ON "tracker_state"("trackerId");
