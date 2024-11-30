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

export async function getAnimals() {
    const animals = await prisma.animal.findMany({
        include: {
            breed: {
                include: {
                    typeOfAnimal: true
                }
            },
        }
    })
    console.log('funcionando' + animals)

    return animals
}

export async function getAnimalById(id: string) {
    const animal = await prisma.animal.findUnique({
        where: {
            id
        },
        include: {
            user: {
                select: {
                    cellPhone: true,
                    name: true
                }
            },
            breed: {
                select: {
                    name: true
                }
            }
        }
    })

    return animal
}
