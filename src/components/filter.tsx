'use client'

import { useEffect, useState } from "react"
import { getTypesOfAnimals } from "../app/actions"
import { TypeOfAnimal } from "@prisma/client"

const imgs = [
  '/Cachorro.svg',
  '/Gato.png',
  '/Aves.png',
  '/Répteis.png',
  '/Equinos.png',
  '/Roedores.png',
  '/Peixes.svg'
]

interface FiltroAnimaisProps {
  handleChange: (animalName: string) => void
}

export default function FiltroAnimais(props: FiltroAnimaisProps) {
  const [typesAnimals, setTypesAnimals] = useState<(TypeOfAnimal & { img: string })[]>([])

  useEffect(() => {
    const animals = async () => {
      const types = await getTypesOfAnimals() as any

      for (const type of types) {
        type.img = imgs[imgs.map((img) => img.split('.')[0]).indexOf(`/${type.name}`)]
      }

      setTypesAnimals(types)
    }

    animals()
  }, [])

  return (
    <div className="font-[family-name:var(--font-be-vietnam-regular)] flex flex-col items-center mx-16 w-64 min-h-96 bg-white rounded-2xl drop-shadow-md m-4 py-3 text-gray-700">
      <div className="flex items-center p-1">
        <h1 className="text-2xl  font-[family-name:var(--font-be-vietnam)] ">ANIMAIS</h1>
        <div className="w-6 mx-1">
          <img src="/filtro-animais.png" alt="" />
        </div>
      </div>
      {typesAnimals.map((typesAnimal, index) => (
        <div
          key={index}
          className="flex bg-gray-200 hover:bg-orange-400 active:bg-orange-500 hover:scale-105 cursor-pointer w-40 mx-5 rounded-3xl justify-center drop-shadow-md p-1 m-2"
          onClick={() => props.handleChange(typesAnimal.name)}
        >
          <div className="w-4 mx-1 flex justify-center items-center">
            <img src={typesAnimal.img} alt="" />
          </div>
          <p>{typesAnimal.name}</p>
        </div>
      ))}
    </div>
  )
}
