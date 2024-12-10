"use server";

import { nextAuthOptions } from "@/lib/utils";
import { State } from "@/types";
import { Gender, PrismaClient } from "@prisma/client";
import { getServerSession } from "next-auth";
import { z } from "zod";

export async function registerAnimal(prevState: State, formData: FormData) {
  console.log(formData);

  const session = await getServerSession(nextAuthOptions);

  const prisma = new PrismaClient();

  const state = {
    success: true,
    errors: {},
  };

  const schema = z.object({
    // tipoAnimal: z.string().max(130, 'Nome muito grande'),
    // especie: z.string(),
    gender: z.enum(["MACHO", "FEMEA"]),
    nome: z.string().max(100, "Nome muito grande").min(1, "*Dê um nome ao animalzinho*"),
    // faseVida: z.enum(["Filhote", "Adulto", "Idoso"]),
    // porte: z.enum(["Pequeno", "Médio", "Grande"]),
    // castracao: z.boolean(),
    // cor: z.string().max(15, "Texto excede o limite de caracteres"),
    // localizacao: z.string().max(150, "Texto excede o limite de caracteres"),
    descricao: z.string().max(200, "Texto muito grande, diminua um pouco"),
    breedId: z.string({required_error: '*Selecione uma raça*', invalid_type_error:'*Selecione uma raça*'}).uuid({ message: '*Selecione uma raça*' }
    ),
    image: z.string().min(1, { message: '*Imagem é obrigatória*' })
  });

  type Animal = z.infer<typeof schema>;

  const data: Animal = {
    // tipoAnimal: formData.get('tipoAnimal') as string,
    // especie: formData.get('especie') as string,
    gender: formData.get("sexo") as Gender,
    nome: formData.get("nome") as string,
    // faseVida: formData.get('faseVida') as "Filhote" | "Adulto" | "Idoso",
    // porte: formData.get('porte') as "Pequeno" | "Médio" | "Grande",
    // castracao : formData.get('castracao') ? true : false,
    // cor: formData.get('cor') as string,
    // localizacao: formData.get('localizacao') as string,
    descricao: formData.get("descricao") as string,
    breedId: formData.get("breedId") as string,
    image: formData.get("imageBase64") as string
  };

  const valitedFields = schema.safeParse(data);

  if (!valitedFields.success) {
    state.success = false;
    state.errors = valitedFields.error.flatten().fieldErrors;

    return state;
  }

  //salvando no banco de dados
  await prisma.animal.create({
    data: {
      name: data.nome,
      description: data.descricao,
      gender: data.gender,
      breedId: data.breedId,
      userId: session!.user.id,
      image: data.image
    },
  });
  
  return state;
}
