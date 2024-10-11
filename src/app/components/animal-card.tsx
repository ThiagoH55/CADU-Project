interface AnimalCardProps {
    animal: {
        name: string
        species: string
        address: string
        photo: string
    }
}

export default function AnimalCard({ animal }: AnimalCardProps) {
    return (
        <div className="max-w-60 bg-white rounded-2xl drop-shadow-md m-4">
            <img className="rounded-t-2xl max-w-56" src={animal.photo} alt="animal" />
            <div className="p-2">
            <h1 className="text-black text-2xl font-[family-name:var(--font-be-vietnam)]">{animal.name}</h1>
            <h2 className="text-orange-600 text-sm font-[family-name:var(--font-be-vietnam-regular)]">{animal.species}</h2>
            <p className="text-gray-700 text-sm font-[family-name:var(--font-be-vietnam-regular)]">{animal.address}</p>
            </div>
        </div>
    )
}
