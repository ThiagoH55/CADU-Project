"use client";

import { getAnimalById } from "@/app/actions";
import AnimalData from "@/components/animal-data";
import Header from "@/components/header";
import { Gender } from "@prisma/client";
import { FormEvent, useEffect, useState } from "react";

export default function AnimalPage({ params }: { params: { slug: string } }) {
  const bodyTemplate =
    "dasjdhaksjdhka j hkjhaksjdhkajshdkjashd jhkajhdskajshdkjwsah";

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
      <Header />

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
                <p className="">O animal não possui uma descrição.</p>
              ) : (
                animal?.description
              )}
            </div>
          </div>
        </div>

        <div className=" text-black flex flex-wrap">
          <button  onClick={() => setModalOpen((prev) => !prev)}>
            Solicitar adoção
          </button>
        </div>

        <dialog open={modalOpen} className="bg-red-800">
          <form onSubmit={handleSubmit}>
            <label htmlFor="">Bom dia</label>
            <input type="text" name="name" />
            <label htmlFor="">Boa noite</label>
            {/* <input type="text" name="description" /> */}
            <textarea name="description">{bodyTemplate}</textarea>
            <button type="submit">Enviar</button>
          </form>
        </dialog>
      </div>
    </div>
  );
}
