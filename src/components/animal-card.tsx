import { $Enums } from "@prisma/client";

interface AnimalCardProps {
    name: string;
    id: string;
    description: string;
    image: string;
    gender: $Enums.Gender;
    userId: string;
    breedId: string;
    user: {
        state: string;
        city: string;
    },
    breed: {
        id: string;
        name: string;
        typeOfAnimalId: string;
    }
}

export default function AnimalCard(animal: AnimalCardProps) {
    return (
        <div className="w-56 max-h-80  bg-white hover:bg-orange-400 hover:scale-105 cursor-pointer rounded-2xl drop-shadow-md m-4 group">
            <img className="rounded-t-2xl rounded-bl-2xl h-1/2 w-full aspect-square" src={animal.image} alt="fotinho do animal" />
            <div className="p-2">
                <h1 className="text-black group-hover:text-white text-2xl truncate font-[family-name:var(--font-be-vietnam)]">{animal.name}</h1>
                <h2 className="text-orange-600 group-hover:text-white text-sm font-[family-name:var(--font-be-vietnam-regular)]">{animal.breed.name}</h2>
                <h3 className="text-orange-600 group-hover:text-white text-sm font-[family-name:var(--font-be-vietnam-regular)]"> {animal.user.city} - {animal.user.state}</h3>
            {/* <p className="text-gray-700 group-hover:text-white text-sm font-[family-name:var(--font-be-vietnam-regular)]">{animal.address}</p> */}
        </div>
        </div >
    )
}
