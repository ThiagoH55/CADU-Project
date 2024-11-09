import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";

export async function insertBreeds(
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
) {
  const breeds = [
    {
      id: "b7a9be58-3d1d-4bc2-9e53-858a88adf774",
      name: "Labrador Retriever",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "f340d0d3-ff6b-45f7-9a99-07b7c097a9c1",
      name: "Bulldog",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "d1c8be8c-8e8e-4315-bb50-8b11860c0766",
      name: "Beagle",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "8c8a74f1-e08b-4a4d-977d-dcb13b61f39e",
      name: "Poodle",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "a3cf4e51-897d-4e32-b23a-b358bbfd5005",
      name: "Golden Retriever",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "bb29242e-d3b7-42f3-b5f3-b29cfeb0ac9a",
      name: "Rottweiler",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "f0c1e346-51ad-4cb0-bfff-eeb1a46554c1",
      name: "Dachshund",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "0d8b0fcb-cbbb-4a9a-b3fe-c7d82f6cbfa5",
      name: "Chihuahua",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "5d8b0f70-ffec-4e7b-9577-588542e7c877",
      name: "Bulldog Francês",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "a57fa67e-ef7c-4c7c-8cbb-c02ff106b0a0",
      name: "Shih Tzu",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "c32d6f2c-993e-45b1-9536-bc6575c392f5",
      name: "Pug",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "ff03a1c0-53c7-4f69-b9ff-b736b8d37738",
      name: "Boxer",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "4df9d458-68f2-4b59-b839-0709a7305f97",
      name: "Cocker Spaniel",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "e82a2399-d249-4690-85ea-df62a320bb0a",
      name: "Schnauzer",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "a376eae3-95f1-44b0-a941-347a6b22f66c",
      name: "Border Collie",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "8cbcc832-9b73-42b7-9022-8e03ad0b8138",
      name: "Husky Siberiano",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "ff93c3d7-d45b-4c2c-bb58-84c3b2769070",
      name: "Cavalier King Charles Spaniel",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "f7c32d89-78b6-46ab-bd42-0ab5cc458f9b",
      name: "Pitbull",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "f194d8e4-8594-43bb-8580-ea7cbe8a0154",
      name: "Maltês",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "9d7bde88-32ac-4295-8542-5c21d87db7f0",
      name: "Buldogue Inglês",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "d7bc7d71-1d3f-45f0-bb5b-b75881f45f56",
      name: "Cocker Spaniel Inglês",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "1bc15c1a-3342-4775-bd90-b6f768e8fa1c",
      name: "Greyhound",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "f3e2f38d-1b8f-48fc-bff6-bebf2c9ed940",
      name: "Pastor Alemão",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "a1cc8b95-bb2d-4599-a602-86b0409feaa6",
      name: "Poodle Toy",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "cbd1a3c0-b19e-4877-bb2b-31be5d48925d",
      name: "Jack Russell Terrier",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "42e6ed9b-893f-4d29-a18d-7fc41a7004b7",
      name: "Shiba Inu",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "fdb6725c-2e87-4b6b-b7cc-4606a73f59f3",
      name: "Basset Hound",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "a3b06c44-9283-4bc1-95f7-df74d0104bfa",
      name: "Mastim Inglês",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "cc963b56-1b24-4b7d-b98c-7363d32b4160",
      name: "Dogue Alemão",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "17709b83-c34e-4c5d-b327-f5b467a9b548",
      name: "Schnauzer Miniatura",
      typeOfAnimalId: "f49b988e-bf46-4a5d-811a-51c3ff03276a",
    },
    {
      id: "cfe87edb-8b26-4f1c-9c0b-c89a26337f6b",
      name: "Persa",
      typeOfAnimalId: "33de9494-8896-4c3d-bda8-c2a356102ab7",
    },
    {
      id: "56a7a451-6e4f-4be0-85f6-fbd6849b53a0",
      name: "Siamês",
      typeOfAnimalId: "33de9494-8896-4c3d-bda8-c2a356102ab7",
    },
    {
      id: "a8e1f08b-dbe7-4ed4-93b3-cc3027a963f4",
      name: "Maine Coon",
      typeOfAnimalId: "33de9494-8896-4c3d-bda8-c2a356102ab7",
    },
    {
      id: "9b08f1ba-79b1-4a04-8a91-198d431d9de7",
      name: "Bengal",
      typeOfAnimalId: "33de9494-8896-4c3d-bda8-c2a356102ab7",
    },
    {
      id: "ac902b29-f3c4-4316-b70d-4cbded9c2c47",
      name: "Ragdoll",
      typeOfAnimalId: "33de9494-8896-4c3d-bda8-c2a356102ab7",
    },
    {
      id: "12ef7592-fda1-43da-9f91-1db21388bc7d",
      name: "Sphynx",
      typeOfAnimalId: "33de9494-8896-4c3d-bda8-c2a356102ab7",
    },
    {
      id: "0fe9b076-8f57-4a8f-87b9-26339f50e3a7",
      name: "Papagaio",
      typeOfAnimalId: "44a6ce15-b57a-4675-896a-e9115b93d9a2",
    },
    {
      id: "93bce3cf-b27f-4ebf-b820-bd8498a98c7c",
      name: "Canário",
      typeOfAnimalId: "44a6ce15-b57a-4675-896a-e9115b93d9a2",
    },
    {
      id: "f7b08f37-9c88-4a9b-b1ed-bf73a4d20213",
      name: "Periquito",
      typeOfAnimalId: "44a6ce15-b57a-4675-896a-e9115b93d9a2",
    },
    {
      id: "c9617467-5987-4217-b899-7e5ed9f11c0e",
      name: "Calopsita",
      typeOfAnimalId: "44a6ce15-b57a-4675-896a-e9115b93d9a2",
    },
    {
      id: "cfa91322-3f01-47c2-b8c0-f0e6f276a39b",
      name: "Arara",
      typeOfAnimalId: "44a6ce15-b57a-4675-896a-e9115b93d9a2",
    },
    {
      id: "e1f017bc-e37b-40c7-9888-2ac1f102cc7e",
      name: "Iguana",
      typeOfAnimalId: "4589c4dd-5f1a-4861-81c9-e6644975479b",
    },
    {
      id: "573e8a1e-9cdb-4e92-94c0-f315773f3e3d",
      name: "Tartaruga",
      typeOfAnimalId: "4589c4dd-5f1a-4861-81c9-e6644975479b",
    },
    {
      id: "9b01ea4f-68e0-44c1-bbb9-fd7854c2ae71",
      name: "Camaleão",
      typeOfAnimalId: "4589c4dd-5f1a-4861-81c9-e6644975479b",
    },
    {
      id: "d10ec459-e537-4515-8c6b-e57ef84e4745",
      name: "Serpente",
      typeOfAnimalId: "4589c4dd-5f1a-4861-81c9-e6644975479b",
    },
    {
      id: "2c0fbb88-0b30-4677-84a2-5b4bb9441b1f",
      name: "Cavalo Árabe",
      typeOfAnimalId: "e7756925-9df3-40fb-9f3c-57357d8feb61",
    },
    {
      id: "19e2e5d1-b30a-46c4-a122-9a7f8b458fd2",
      name: "Puro Sangue Inglês",
      typeOfAnimalId: "e7756925-9df3-40fb-9f3c-57357d8feb61",
    },
    {
      id: "1f94b03b-39f2-42bc-b0c1-bf7a33c1c2d1",
      name: "Cavalo Quarto de Milha",
      typeOfAnimalId: "e7756925-9df3-40fb-9f3c-57357d8feb61",
    },
    {
      id: "3252adcb-18fd-431f-a7c6-b0b50e8cbdb2",
      name: "Andaluz",
      typeOfAnimalId: "e7756925-9df3-40fb-9f3c-57357d8feb61",
    },
    {
      id: "8adf973e-017d-4e9a-87f0-40b0ef2db7ec",
      name: "Mangalarga Marchador",
      typeOfAnimalId: "e7756925-9df3-40fb-9f3c-57357d8feb61",
    },
    {
      id: "8c7fd50e-bc7b-44b0-b02a-21b62b1b0ff6",
      name: "Hamster",
      typeOfAnimalId: "3601b7f8-af3d-4660-9aee-2f2b5a3bc5c7",
    },
    {
      id: "273a6a56-4443-4b98-9cc7-1c410b0986a7",
      name: "Gerbil",
      typeOfAnimalId: "3601b7f8-af3d-4660-9aee-2f2b5a3bc5c7",
    },
    {
      id: "f12e4739-b9a2-4ff6-8a7c-d3a7036fa813",
      name: "Porquinho-da-Índia",
      typeOfAnimalId: "3601b7f8-af3d-4660-9aee-2f2b5a3bc5c7",
    },
    {
      id: "b42c89ea-06a1-4f88-8f6b-5b77533d4410",
      name: "Coelho",
      typeOfAnimalId: "3601b7f8-af3d-4660-9aee-2f2b5a3bc5c7",
    },

    {
      id: "62b8e9d5-b34e-4572-9e82-1f5fba522d90",
      name: "Betta",
      typeOfAnimalId: "e07813c4-955d-4ed5-ac4c-8b4166d432de",
    },
    {
      id: "b9dbcd8d-e799-47b1-b2b0-1be4762e1be5",
      name: "Acará",
      typeOfAnimalId: "e07813c4-955d-4ed5-ac4c-8b4166d432de",
    },
    {
      id: "7fdac34b-f53c-4903-b8e4-b53e9cf04061",
      name: "Neon",
      typeOfAnimalId: "e07813c4-955d-4ed5-ac4c-8b4166d432de",
    },
    {
      id: "4d9f2df9-8a32-4d4f-92d0-df71ed8e0790",
      name: "Tetra",
      typeOfAnimalId: "e07813c4-955d-4ed5-ac4c-8b4166d432de",
    },
    {
      id: "b5f2c8a7-105b-4565-b819-bd831c6fcd3e",
      name: "Guppy",
      typeOfAnimalId: "e07813c4-955d-4ed5-ac4c-8b4166d432de",
    },
  ];

  console.log('seeding breeds...')

  for (const breed of breeds) {
    await prisma.breed.upsert({
      where: {
        id:breed.id
      },
      update: {},
      create: {
        ...breed
      }
    })
  }
}
