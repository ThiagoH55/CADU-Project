"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";
import { signUp } from "./actions";
import { State } from "@/types";
import { signIn } from "next-auth/react";
import RoundedNextButton from "../../components/bottons";
import Link from "next/link";
import { Eye, EyeClosed } from "lucide-react";

const initialState: State = {
  success: false,
  errors: {},
};

type EstadosBrasil = {
  [key: string]: string
}

const estadosBrasil: EstadosBrasil = {
  "AC": "Acre",
  "AL": "Alagoas",
  "AM": "Amazonas",
  "AP": "Amapá",
  "BA": "Bahia",
  "CE": "Ceará",
  "DF": "Distrito Federal",
  "ES": "Espírito Santo",
  "GO": "Goiás",
  "MA": "Maranhão",
  "MG": "Minas Gerais",
  "MS": "Mato Grosso do Sul",
  "MT": "Mato Grosso",
  "PA": "Pará",
  "PB": "Paraíba",
  "PE": "Pernambuco",
  "PI": "Piauí",
  "PR": "Paraná",
  "RJ": "Rio de Janeiro",
  "RN": "Rio Grande do Norte",
  "RO": "Rondônia",
  "RR": "Roraima",
  "RS": "Rio Grande do Sul",
  "SC": "Santa Catarina",
  "SE": "Sergipe",
  "SP": "São Paulo",
  "TO": "Tocantins"
};

export default function SignUp() {
  const [state, formAction] = useFormState(signUp, initialState);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [secondStep, setSecondStep] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const login = async () => {
      await signIn("credentials", {
        email,
        password,
        redirect: false,
      });
    };

    if (state.success) {
      login();

      router.replace("/");
    }
  }, [state.success, router, email, password]);

  return (
    <div className="flex flex-col justify-center items-center bg-gray-300 h-screen">
      <Link href={"/"}>
        <div>
          <img className="size-48" src="/LogoCadu.svg" alt="" />
        </div>
      </Link>

      <div className="w-7/12 h-7/12 mb-7 py-3 bg-white flex-start items-center justify-center drop-shadow-3xl rounded-3xl ">
        <form
          action={formAction}
          className="font-[family-name:var(--font-be-vietnam)]"
        >
          <div className="text-gray-900 flex flex-col items-center ">
            <div className="flex justify-center">
              {" "}
              <h1 className=" flex justify-center text-2xl text-orange-500 mb-6 ">
                CADASTRO
              </h1>{" "}
            </div>

            <div
              className={`${
                !secondStep ? "flex-col flex justify-center w-9/12" : "hidden"
              }`}
            >
              <label htmlFor="name">Nome Completo</label>
              <input
                className="bg-gray-300 mb-4 h-10 rounded-xl"
                type="text"
                name="name"
                id="name"
              />
              <label htmlFor="phonenumber">Telefone</label>
              <input
                className="bg-gray-300 mb-4 h-10 rounded-xl"
                type="text"
                name="phonenumber"
                id="phonenumber"
                required
                minLength={11}
                maxLength={11}
                onChange={(e) => e.target.value = e.target.value.replace(new RegExp("[^0-9]", "g"), "")}
              />
              <label htmlFor="email">E-mail</label>
              <input
                className="bg-gray-300 mb-4 h-10 rounded-xl"
                type="email"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Senha</label>
              <div className="flex gap-2">
                <div className="w-full flex mb-4 h-10 relative">
                  <input
                    className="flex-1 bg-gray-300 rounded-xl"
                    type={!showPassword ? 'password' : 'text'}
                    name="password"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <span className="absolute top-2 right-2 hover:cursor-pointer" onClick={() => setShowPassword((prev) => !prev)}>
                    {showPassword ? (
                      <Eye />
                    ): (
                      <EyeClosed />
                    )}
                  </span>
                </div>

                <button
                  className="w-10 h-10 text-3xl rounded-full text-white bg-orange-500 "
                  type="button"
                  onClick={() => setSecondStep(true)}
                >
                  &#10140;{" "}
                </button>
              </div>
            </div>

            <div
              className={`${
                secondStep ? "flex-col flex justify-center w-9/12" : "hidden"
              }`}
            >
              <div className="flex justify-between">
                <div className="flex flex-col w-full">
                  <label htmlFor="cpf">CPF</label>
                  <div className="w-full">
                    <input
                      className="bg-gray-300 mb-4 h-10 p-2 rounded-xl w-full mr-14"
                      type="text"
                      name="cpf"
                      id="cpf"
                      minLength={11}
                      maxLength={11}
                      onChange={(e) => e.target.value = e.target.value.replace(new RegExp("[^0-9]", "g"), "")}
                    />
                  </div>
                </div>
                {/* <div className="flex flex-col">
                  <label htmlFor="gender">Gênero</label>
                  <select
                    className="bg-gray-300 mb-4 h-10 p-2 rounded-xl"
                    name="gender"
                    id="gender"
                  >
                    <option value={0}>Masculino</option>
                    <option value={1}>Feminino</option>
                    <option value={3}>Outro</option>
                  </select>
                </div> */}
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col w-full">
                  <label htmlFor="state">Estado</label>
                  <select name="state" id="state" className="bg-gray-300 mb-4 h-10 p-2 rounded-xl mr-2">
                    {Object.keys(estadosBrasil).map((key: string, index) => (
                      <option value={key} key={index}>{estadosBrasil[key]}</option>
                    ))}
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="cidade">Cidade</label>
                  <input
                    className="bg-gray-300 mb-4 h-10 p-2 rounded-xl"
                    name="city"
                    id="Cidade"
                    type="text"
                  />
                </div>
              </div>
              <label htmlFor="adress">Endereço</label>
              <input
                className="bg-gray-300 mb-4 h-10 p-2 rounded-xl"
                type="text"
                name="street"
                id="adress"
                required
              />
              <div className="flex justify-between"></div>
            </div>

            {secondStep && (
              <div className="flex">
                <input type="checkbox" />
                <p className="ml-4">
                  Eu li e concordo com os termos de uso e condições.
                </p>
              </div>
            )}

            <div className="flex w-9/12 justify-between items-center relative py-7 px-2 mt-6">
              {secondStep && (
                <>
                  <div className="flex gap-2 rotate-180 w-fit">
                    <RoundedNextButton onClick={() => setSecondStep(false)} />
                  </div>
                  <button
                    className="px-5 py-3 rounded-full text-sm text-white bg-orange-500"
                    type="submit"
                  >
                    FINALIZAR
                  </button>
                </>
              )}
            </div>

            {Object.keys(state.errors).length > 0 && (
              <div className="mb-4">
                {Object.entries(state.errors).map((error, index) => (
                  <p
                    className="text-center w-full text-red-500 text-sm"
                    key={index}
                  >
                    {error[0]} {error[1]}
                  </p>
                ))}
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
