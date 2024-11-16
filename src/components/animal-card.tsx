import { $Enums } from "@prisma/client";

interface AnimalCardProps {
    name: string;
    id: string;
    description: string;
    gender: $Enums.Gender;
    userId: string;
    breedId: string;
    breed: {
        id: string;
        name: string;
        typeOfAnimalId: string;
    }
}

export default function AnimalCard(animal: AnimalCardProps) {
    return (
        <div className="max-w-64 bg-white hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-2xl drop-shadow-md m-4 group">
            {/* <img className="rounded-t-2xl rounded-bl-2xl max-w-56 aspect-square" src={animal.photo} alt="animal" /> */}
            <div className="p-2">
            <h1 className="text-black group-hover:text-white text-2xl font-[family-name:var(--font-be-vietnam)]">{animal.name}</h1>
            <h2 className="text-orange-600 group-hover:text-white text-sm font-[family-name:var(--font-be-vietnam-regular)]">{animal.breed.name}</h2>
            {/* <p className="text-gray-700 group-hover:text-white text-sm font-[family-name:var(--font-be-vietnam-regular)]">{animal.address}</p> */}
            </div>
        </div>
    )
}
