'use client'
import AnimalCard from "../components/animal-card"
import Header from "../components/header"
import Filtro from "../components/filter"
import FiltroFase from "../components/filter-2"
import FiltroLocal from "../components/filter-3"
import { getAnimals } from "./actions"
import { useEffect, useState } from "react"
import { Gender } from "@prisma/client"
import Link from "next/link"

// const animals = [
//   {
//     name: 'Ambrósio',
//     species: 'Cão',
//     address: 'Rua das Flores, 123',
//     photo: 'https://i.pinimg.com/564x/29/af/11/29af11ca013307fe9b8188b640b1b280.jpg'
//   },
//   {
//     name: 'Miau',
//     species: 'Gato',
//     address: 'Avenida Central, 456',
//     photo: 'https://i.pinimg.com/564x/43/b8/f7/43b8f757efbe31ed48e6875165f3ee5d.jpg'
//   },
//   {
//     name: 'Tweety',
//     species: 'Pássaro',
//     address: 'Rua do Sol, 789',
//     photo: 'https://i.pinimg.com/736x/58/37/73/5837731f1bcddc2bdf053cdfedd587d9.jpg'
//   },
//   {
//     name: 'Nemo',
//     species: 'Peixe',
//     address: 'Aquário do Lar, 101',
//     photo: 'https://i.pinimg.com/564x/63/d0/aa/63d0aa10a92d59b253513df52b62b682.jpg'
//   },
//   {
//     name: 'Chupetão',
//     species: 'Cão',
//     address: 'Travessa das Árvores, 202',
//     photo: 'https://i.pinimg.com/564x/6d/e2/26/6de2261ce26d191f3de7150e17a98eec.jpg'
//   },
//   {
//     name: 'Luna',
//     species: 'Gato',
//     address: 'Rua das Estrelas, 303',
//     photo: 'https://i.pinimg.com/564x/95/e5/62/95e5620859169fa69c02860b9577b2b7.jpg'
//   },
//   {
//     name: 'Charlie',
//     species: 'Pássaro',
//     address: 'Rua do Ventos, 404',
//     photo: 'https://i.pinimg.com/736x/f5/fc/dd/f5fcddf81fa710ccbd3bd3e52f7473db.jpg'
//   },
//   {
//     name: 'Goldie',
//     species: 'Peixe',
//     address: 'Aquário do Sol, 505',
//     photo: 'https://i.pinimg.com/564x/c9/a2/7c/c9a27cf8bb1e327572e2d968cbe60b87.jpg'
//   },
//   {
//     name: 'Bella',
//     species: 'Coelho',
//     address: 'Rua da Paz, 606',
//     photo: 'https://i.pinimg.com/564x/3f/69/93/3f69936b6fc226be0affa2d50158e9bd.jpg'
//   },
//   {
//     name: 'Leandro',
//     species: 'Cão',
//     address: 'Rua da Amizade, 707',
//     photo: 'https://i.pinimg.com/736x/33/86/8f/33868f35a8245da1d005226e5d5e2b1e.jpg'
//   },
//   {
//     name: 'Fagner',
//     species: 'Hamster',
//     address: 'Ponto Cidadão, laboratório',
//     photo: 'https://i.pinimg.com/564x/2a/34/02/2a3402dab57b27be93fdba8acdc1321e.jpg'
//   },
//   {
//     name: 'Sarcixa',
//     species: 'Cão',
//     address: 'Sei lá, 123',
//     photo: 'https://i.pinimg.com/564x/c3/28/0d/c3280dc15901ae4c31917e0538329335.jpg'
//   }
// ]

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
  } & {
      id: string;
      name: string;
      description: string;
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
  } & {
      id: string;
      name: string;
      description: string;
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
        <div className="w-8/12 flex flex-wrap">
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

