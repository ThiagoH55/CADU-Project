"use client";

import { getAnimalById } from "@/app/actions";
import AnimalData from "@/components/animal-data";
import Header from "@/components/header";
import Header1 from "@/components/header-comp";
import { Gender } from "@prisma/client";
import { FormEvent, useEffect, useState } from "react";

export default function AnimalPage({ params }: { params: { slug: string } }) {
  const bodyTemplate =
    "Olá, vi seu bichinho no CADU e...";

  const [animal, setAnimal] = useState<
    | ({
      user: {
        name: string;
        cellPhone: string;
      };
      breed: {
        name: string;
      };
    } & {
      name: string;
      description: string;
      id: string;
      gender: Gender;
      userId: string;
      breedId: string;
    })
    | null
  >(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const getAnimalData = async () => {
      const animalData = await getAnimalById(params.slug);

      setAnimal(animalData);
    };

    getAnimalData();
  }, [params.slug]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = new FormData(e.currentTarget);

    const name = form.get("name");
    const description = form.get("description");

    const phoneNumber = animal?.user.cellPhone;

    const message = [name, description].join(" ");

    const encodedMessage = encodeURIComponent(message);

    const url = `https://wa.me/${phoneNumber
      ?.replace(/^(.{3})./, "$1")
      ?.slice(1)}?text=${encodedMessage}`;

    window.open(url, "_blank");
  }

  return (
    <div className="font-[family-name:var(--font-be-vietnam)] h-screen">
      <Header1 />

      <div className="bg-gray-300 flex flex-col justify-center items-center pt-20 h-full">
        <div className="w-10/12 h-4/6 bg-white drop-shadow-3xl rounded-3xl">
          <div className="flex h-1/2 mx-7 my-7">
            <div className="w-64">
              <img
                className="rounded-md"
                src="https://i.pinimg.com/564x/43/b8/f7/43b8f757efbe31ed48e6875165f3ee5d.jpg"
                alt=""
              />
            </div>

            <div className="mx-7">
              <h1 className="text-black text-6xl">{animal?.name}</h1>

              <div className="my-5 flex">
                <AnimalData>{animal?.gender === 'FEMEA' ? 'Fêmea' : 'Macho'}</AnimalData>
                <AnimalData>{animal?.breed.name}</AnimalData>
                <AnimalData> {animal?.user.}</AnimalData>
              </div>

              <div className="mt-24">
                <h1 className="text-black text-2xl ">
                  Doador:
                  <span className="text-orange-500">
                    {" "}
                    {animal?.user.name}
                  </span>{" "}
                </h1>
              </div>
            </div>
          </div>

          <div className="flex mx-7 justify-center text-black">
            <div className="bg-gray-300 w-full min-h-44 rounded-md p-2">
              <h2 className="text-gray-600 text-lg">Descrição:</h2>
              {animal?.description.length === 0 ? (
                <p className="">O animal não possui uma descrição :/ </p>
              ) : (
                animal?.description
              )}
            </div>
          </div>
        </div>

        <div className=" text-black flex flex-wrap">
          <button className=" p-3 py-2 my-10  text-1xl rounded-full text-white bg-orange-500" onClick={() => setModalOpen((prev) => !prev)}>
            Solicitar adoção
          </button>
        </div>

{/* 
        <dialog open={modalOpen} className="fixed bg-black bg-opacity-50 inset-0 z-50 backdrop-blur-sm flex justify-center items-center w-full h-full">
          <form className="absolute rounded-xl m-7 bg-white w-80 h-80 flex flex-col justify-center items-center text-start" onSubmit={handleSubmit}>
            <div className="relative w-full px-">
              <button type="button" className="rotate-180 text-2xl text-gray-500 absolute top-0 right-0 -mt-5 p-1" onClick={() => setModalOpen((prev) => !prev)}>
              ⨯
              </button>
            </div>

            <h1 className="text-2xl text-orange-500 mb-5">Solicitação de contato</h1>
            <label className="text-gray-600" htmlFor="">Insira seu nome</label>
            <input className="bg-gray-300 rounded-md px-2 py-1 mb-5 text-xs w-60 h-8" type="text" name="name" />
            <label className="text-gray-600" htmlFor="">Insira uma mensagem</label>
            <input type="text" name="description" />
            <textarea className="bg-gray-300 rounded-md mb-5 px-2 py-2 resize-none  w-60 h-20 text-xs" name="description">{bodyTemplate}</textarea>
            <button className=" p-3 py-2 w-20 text-center text-1xl rounded-full text-white bg-orange-500" type="submit">Enviar</button>
          </form>
        </dialog> */}
      </div>
    </div>
  );
}
