"use client";
import { useFormState } from "react-dom";
import { getBreeds, getTypesOfAnimals } from "../actions";
import InsertInfosInput from "../../components/insert-infos";
import { useState, useEffect, FormEvent } from "react";
import { registerAnimal } from "./actions";
import { State } from "@/types";
import Link from "next/link";

const initialState: State = {
  success: false,
  errors: {},
};

export default function AnimalRegister() {
  const [state, formAction] = useFormState(registerAnimal, initialState);
  const [base64, setBase64] = useState("");
  const [typesOfAnimals, setTypesOfAnimals] = useState<
    {
      id: string;
      name: string;
    }[]
  >([]);
  const [selectTypeOfAnimal, setSelectTypeOfAnimal] = useState<string>("");

  const [breeds, setBreeds] = useState<
    {
      id: string;
      name: string;
    }[]
  >([]);

  useEffect(() => {
    const typesOfAnimals = async () => {
      setTypesOfAnimals(await getTypesOfAnimals());
    };

    typesOfAnimals();
  }, []);

  useEffect(() => {
    const breeds = async () => {
      setBreeds(await getBreeds(selectTypeOfAnimal));
    };

    breeds();
  }, [selectTypeOfAnimal]);

  const createBase64 = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
  
    if (file) {
      const reader = new FileReader();

      reader.readAsDataURL(file);
      
      reader.onloadend = () => {
        let base64: string = reader.result as string

        console.log(base64)

        setBase64(base64);
      };
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const form = new FormData(e.currentTarget)

    form.append("imageBase64", base64)

    formAction(form)
  }

  return (
    <div className="bg-gray-300 min-h-screen">
      <header className="z-50 h-16 w-full bg-gradient-to-r from bg-orange-500 to orange-700 items-center flex flex-initial text-3xl fixed shadow-lg justify-between">
        <div className="flex flex-rol items-center">
          <button className="flex justify-self-center ml-6 rotate-180 text-4xl text-white">
            &#10140;
          </button>
        </div>

        <div className="flex flex-rol items-center ">
          <div className="mr-6">
            <Link  href={'/'}>
            <img className="w-14" src="/logoSemDesc.png" alt="" />
            </Link>
           
          </div>
        </div>
      </header>

      <div className="h-screen w-screen bg-gray-300 flex justify-center items-center ">
        <div className="bg-white w-7/10 h-4/6 mt-10 drop-shadow-4xl rounded-3xl">
          <div className="w-full flex p-5">
            <div className=" ml-6 h-full rounded-md font-[family-name:var(--font-be-vietnam)]">
              <label htmlFor="animalPicture" className="cursor-pointer">
                <img
                  className=" items-center rounded-md w-56"
                  src={"img-input.svg"}
                  alt=""
                />
              </label>

              <input
                type="file"
                className="hidden"
                id="animalPicture"
                accept="image/*"
                onChange={createBase64}
              />
              <p className="flex text-gray-500 text-center justify-center m-3 ">
                Enviar fotos do <br />
                animalzinho
              </p>
            </div>

            <form
              className="w-4/6 font-[family-name:var(--font-be-vietnam)]"
              onSubmit={handleSubmit}
            >
              <h1 className="text-orange-500 text-center ml-16 text-5xl ">
                CADASTRO DE ANIMAL
              </h1>

                {JSON.stringify(state.errors)}
              
              <div className="flex flex-row gap-24">
                <select onChange={(e) => setSelectTypeOfAnimal(e.target.value)}>
                  <option selected>Animal</option>
                  {typesOfAnimals.map((typeOfAnimal, index) => (
                    <option key={index} value={typeOfAnimal.id}>
                      {typeOfAnimal.name}
                    </option>
                  ))}
                </select>

                {breeds.length > 0 && (
                  <select name="breedId">
                    {breeds.map((breed, index) => (
                      <option key={index} value={breed.id}>
                        {breed.name}
                      </option>
                    ))}
                  </select>
                )}

                <div className="first:mt-14 first:ml-16">
                  {/* <InsertInfosInput
                    nameLabel="Tipo de animal"
                    nameInputs="tipoAnimal"
                  />
                  <InsertInfosInput nameLabel="Raça" nameInputs="raca" /> */}
                  <InsertInfosInput nameLabel="Nome" nameInputs="nome" />
                  <InsertInfosInput nameLabel="Sexo" nameInputs="sexo" />
                  <InsertInfosInput
                    nameLabel="Fase de vida"
                    nameInputs="faseVida"
                  />
                  <InsertInfosInput nameLabel="Porte" nameInputs="porte" />
                </div>

                <div className="mt-14 ml-5 text-black">
                  <InsertInfosInput
                    nameLabel="Castração"
                    nameInputs="castracao"
                  />
                  <InsertInfosInput nameLabel="Cor" nameInputs="cor" />
                  <InsertInfosInput
                    nameLabel="Localização"
                    nameInputs="localizacao"
                  />
                  <label className="text-2xl" htmlFor="descricao">
                    Descrição
                  </label>
                  <textarea
                    className="bg-gray-300 px-2 min-w-60 min-h-20 resize-none rounded-md"
                    name="descricao"
                  />
                  <button
                    className="flex mt-10 px-5 py-3 justify-self-center rounded-full text-sm text-white bg-orange-500 "
                    type="submit"
                  >
                    CADASTRAR
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
