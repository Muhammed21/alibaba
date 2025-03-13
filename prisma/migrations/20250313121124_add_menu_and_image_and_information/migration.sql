-- CreateTable
CREATE TABLE "Days" (
    "id" SERIAL NOT NULL,
    "informationId" INTEGER NOT NULL,

    CONSTRAINT "Days_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Information" (
    "id" SERIAL NOT NULL,
    "openH" INTEGER NOT NULL,
    "closeH" INTEGER NOT NULL,

    CONSTRAINT "Information_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Menu" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "images" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Menu_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Days" ADD CONSTRAINT "Days_informationId_fkey" FOREIGN KEY ("informationId") REFERENCES "Information"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
