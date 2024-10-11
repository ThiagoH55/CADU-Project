import AnimalCard from "./components/animal-card"
import Header from "./components/header"

const animals = [
  {
    name: 'Rex',
    species: 'Cão',
    address: 'Rua das Flores, 123',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'
  },
  {
    name: 'Miau',
    species: 'Gato',
    address: 'Avenida Central, 456',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'
  },
  {
    name: 'Tweety',
    species: 'Pássaro',
    address: 'Rua do Sol, 789',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'
  },
  {
    name: 'Nemo',
    species: 'Peixe',
    address: 'Aquário do Lar, 101',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'
  },
  {
    name: 'Bobby',
    species: 'Cão',
    address: 'Travessa das Árvores, 202',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'
  },
  {
    name: 'Luna',
    species: 'Gato',
    address: 'Rua das Estrelas, 303',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'
  },
  {
    name: 'Charlie',
    species: 'Pássaro',
    address: 'Rua do Ventos, 404',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'
  },
  {
    name: 'Goldie',
    species: 'Peixe',
    address: 'Aquário do Sol, 505',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'
  },
  {
    name: 'Bella',
    species: 'Coelho',
    address: 'Rua da Paz, 606',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'
  },
  {
    name: 'Max',
    species: 'Cão',
    address: 'Rua da Amizade, 707',
    photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwyXeKDN29AmZgZPLS7n0Bepe8QmVappBwZCeA3XWEbWNdiDFB'
  }
]

export default function Home() {
  return (
    <div className="bg-gray-300 min-h-screen">
      <Header />

      <div className="pt-24 flex">
        <div className="w-4/12"></div>
        <div className="w-8/12 flex flex-wrap gap-4">
          {animals.map((animal) => (
            <AnimalCard animal={animal} />
          ))}
        </div>
      </div>
    </div>
  )
}


