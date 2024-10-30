'use client'
import { useRouter } from "next/navigation"
import Header from "../components/header"
import InsertInfosInput from "../components/insert-infos"
import RoundedNextButton from "../components/bottons"


export default function AnimalRegister() {
    return (
        <div className="bg-gray-300 min-h-screen">
            <Header />
            <div className="h-screen w-screen bg-gray-300 flex justify-center items-center ">
                <div className="bg-white w-2/3 h-2/3 drop-shadow-4xl rounded-md">
                    <div className="w-full flex p-5">
                        <div className="h-full justify-start">
                            <img src="img-input.svg" alt="" />
                        </div>

                        <form className="w-3/4 font-[family-name:var(--font-be-vietnam)]">
                            <h1 className="text-orange-500 text-center text-5xl ">CADASTRO DE ANIMAL</h1>
                            <div className="flex flex-row gap-24">

                                <div className="first:mt-5 first:ml-5">

                                    <InsertInfosInput nameLabel="Tipo de animal" nameInputs="tipoAnimal" />
                                    <InsertInfosInput nameLabel="Raça" nameInputs="raca" />
                                    <InsertInfosInput nameLabel="Nome" nameInputs="nome" />
                                    <InsertInfosInput nameLabel="Sexo" nameInputs="sexo" />
                                    <InsertInfosInput nameLabel="Fase de vida" nameInputs="faseVida" />
                                    <InsertInfosInput nameLabel="Porte" nameInputs="porte" />
                                </div>

                                <div className="mt-5 ml-5">

                                    <InsertInfosInput nameLabel="Castração" nameInputs="castracao" />
                                    <InsertInfosInput nameLabel="Cor" nameInputs="cor" />
                                    <InsertInfosInput nameLabel="Localização" nameInputs="localizacao" />
                                    <label className="text-black "htmlFor="descricao">Descrição</label>
                                    <textarea className="bg-gray-300 resize-none" name="descricao"/>
                                    <RoundedNextButton/>
                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

}