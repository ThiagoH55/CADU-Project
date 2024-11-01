'use client'
import { useRouter } from "next/navigation"
import InsertInfosInput from "../components/insert-infos"
import RoundedNextButton from "../components/bottons"


export default function AnimalRegister() {
    return (

        <div className="bg-gray-300 min-h-screen">

            <header className="z-50 h-16 w-full bg-gradient-to-r from bg-orange-500 to orange-700 items-center flex flex-initial text-3xl fixed shadow-lg justify-between">

                <div className="flex flex-rol items-center">

                    <button className="flex justify-self-center ml-6 rotate-180 text-4xl text-white"  >&#10140;</button>

                </div>

                <div className="flex flex-rol items-center ">

                    <div className="mr-6"><img className="w-14" src="/logoSemDesc.png" alt="" /></div>

                </div>


            </header>

            <div className="h-screen w-screen bg-gray-300 flex justify-center items-center ">
                <div className="bg-white w-4/6 h-4/5 mt-10 drop-shadow-4xl rounded-3xl">
                    <div className="w-full flex p-5">
                        <div className="h-full rounded-md font-[family-name:var(--font-be-vietnam)]">
                            <img className=" items-center rounded-md" src="img-input.svg" alt="" />
                            <p className="flex text-gray-500 text-center justify-center m-3 ">Enviar fotos do <br />animalzinho</p>
                        </div>

                        <form className="w-4/6 font-[family-name:var(--font-be-vietnam)]">
                            <h1 className="text-orange-500 text-center ml-24 text-4xl ">CADASTRO DE ANIMAL</h1>
                            <div className="flex flex-row gap-24">

                                <div className="first:mt-5 first:ml-16">

                                    <InsertInfosInput nameLabel="Tipo de animal" nameInputs="tipoAnimal" />
                                    <InsertInfosInput nameLabel="Raça" nameInputs="raca" />
                                    <InsertInfosInput nameLabel="Nome" nameInputs="nome" />
                                    <InsertInfosInput nameLabel="Sexo" nameInputs="sexo" />
                                    <InsertInfosInput nameLabel="Fase de vida" nameInputs="faseVida" />
                                    <InsertInfosInput nameLabel="Porte" nameInputs="porte" />
                                </div>

                                <div className="mt-5 ml-5 text-black">

                                    <InsertInfosInput nameLabel="Castração" nameInputs="castracao" />
                                    <InsertInfosInput nameLabel="Cor" nameInputs="cor" />
                                    <InsertInfosInput nameLabel="Localização" nameInputs="localizacao" />
                                    <label className="text-lg" htmlFor="descricao">Descrição</label>
                                    <textarea className="bg-gray-300 px-2 min-w-60 min-h-20 resize-none rounded-md" name="descricao" />
                                    <button className="flex mt-8 px-5 py-3 justify-self-center rounded-full text-sm text-white bg-orange-500 " type="submit" >CADASTRAR</button>

                                </div>

                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>

    )

}