-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "text" JSONB NOT NULL,
    "stars" INTEGER NOT NULL,
    "picture" TEXT,
    "imagesReview" TEXT[],
    "publishableDate" TIMESTAMP(3) NOT NULL,
    "reviewUrl" TEXT NOT NULL,
    "countryCode" TEXT NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);
