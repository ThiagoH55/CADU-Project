'use client'
import AnimalCard from "../components/animal-card"
import Header from "../components/header"
import Filtro from "../components/filter"
// import FiltroFase from "../components/filter-2"
import FiltroLocal from "../components/filter-3"
import { getAnimals } from "./actions"
import { useEffect, useState } from "react"
import { Gender } from "@prisma/client"
import Link from "next/link"

export default function Home() {

  const [animals, setAnimals] = useState<({
    breed: {
      typeOfAnimal: {
        id: string;
        name: string;
      };
    } & {
      id: string;
      name: string;
      typeOfAnimalId: string;
    };
    user: {
      state: string;
      city: string;
    };
  } & {
    id: string;
    name: string;
    description: string;
    image: string;
    gender: Gender;
    userId: string;
    breedId: string;
  })[]>([])

  const [filteredAnimals, setFilteredAnimals] = useState<({
    breed: {
      typeOfAnimal: {
        id: string;
        name: string;
      };
    } & {
      id: string;
      name: string;
      typeOfAnimalId: string;
    };
    user: {
      state: string;
      city: string;
    };
  } & {
    id: string;
    name: string;
    description: string;
    image: string;
    gender: Gender;
    userId: string;
    breedId: string;
  })[]>([])

  useEffect(() => {
    const animals = async () => {
      const types = await getAnimals()

      setAnimals(types)
      setFilteredAnimals(types)
    }

    animals()
  }, [])

  const filterAnimals = (animalName: string) => {
    const filteredAnimals = animals.filter((animal) => animal.breed.typeOfAnimal.name === animalName)

    setFilteredAnimals(filteredAnimals)
  }

  return (
    <div className="bg-gray-300 min-h-screen">
      <Header />

      <div className="pt-24 flex">
        <div className="w-4/12">
          <Filtro handleChange={filterAnimals} />
          {/* <FiltroFase /> */}
          <FiltroLocal />
        </div>
        <div className="w-8/12 h-5/6 flex flex-wrap">
          {filteredAnimals.map((animal, index) => (
            <Link href={`/animal/${animal.id}`} key={index}>
              <AnimalCard {...animal} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

