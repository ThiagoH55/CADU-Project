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
        <div className="max-w-56 bg-white p-2 rounded-md drop-shadow-md">
            <img className="aspect-square" src={animal.photo} alt="animal" />
            <h1>{animal.name}</h1>
            <h2>{animal.species}</h2>
            <p>{animal.address}</p>
        </div>

    )
}
