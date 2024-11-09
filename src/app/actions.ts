'use server'

import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function getTypesOfAnimals() {
    const typesOfAnimals = await prisma.typeOfAnimal.findMany({
        select: {
            id: true,
            name: true
        }
    })

    return typesOfAnimals
}

export async function getBreeds(typeOfAnimalId: string) {
    const breeds = await prisma.breed.findMany({
        where: {
            typeOfAnimalId
        },
        select: {
            id: true,
            name: true,
        },
    })

    return breeds
}
