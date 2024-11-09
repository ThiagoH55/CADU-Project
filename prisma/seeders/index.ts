import { PrismaClient } from "@prisma/client";
import { insertTypesOfAnimals } from "./typesOfAnimals";
import { insertBreeds } from "./breeds";

const prisma = new PrismaClient();

async function seed() {
  await insertTypesOfAnimals(prisma);
  await insertBreeds(prisma);
}

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
