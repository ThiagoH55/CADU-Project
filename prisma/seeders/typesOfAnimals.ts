import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export async function insertTypesOfAnimals(
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
) {
  const types = [
    {
      id: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
      name: "Cachorro",
    },
    {
      id: "33de9494-8896-4c3d-bda8-c2a356102ab7",
      name: "Gato",
    },
    {
      id: "44a6ce15-b57a-4675-896a-e9115b93d9a2",
      name: "Aves",
    },
    {
      id: "4589c4dd-5f1a-4861-81c9-e6644975479b",
      name: "Répteis",
    },
    {
      id: "e7756925-9df3-40fb-9f3c-57357d8feb61",
      name: "Equinos",
    },
    {
      id: "3601b7f8-af3d-4660-9aee-2f2b5a3bc5c7",
      name: "Roedores",
    },
    {
      id: "e07813c4-955d-4ed5-ac4c-8b4166d432de",
      name: "Peixes",
    },
  ];

  console.log("seeding types of animals....");

  for (const type of types) {
    await prisma.typeOfAnimal.upsert({
      where: {
        id: type.id,
      },
      update: {},
      create: {
        ...type,
      },
    });
  }
}
