"use client"
import InputField from "@/components/molecules/InputField/inputField";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
export default function CadastroPage() {
      const {
            register
        } = useForm({
            mode: "all",
            criteriaMode: "all"
        })
  return (
    <div className=" w-full h-screen flex flex-row-reverse">
    <div>
      

    </div>
    <div className="w-full  h-screen relative basis-2/3">
        <Image src="/background.png" alt="Fundo" fill className="object-cover" />
        <div className="flex flex-col items-center justify-center relative w-full h-screen ">
        <Image src="/logo.png" alt="Fundo" width={450} height={238} />
            <div className="flex flex-col mt-14">         
                <InputField register={register} name="name" placeholder="Insira seu nome " label="Nome" type="name"  />
                <InputField register={register} name="username" placeholder="Insira seu nome de usuário " label="Nome de usuário" type="username"  />
                <InputField register={register} name="email" placeholder="Insira seu email " label="E-mail" type="email"  />
                <InputField register={register} name="password" placeholder="Insira sua senha" label="Senha" type="password"  />
              <Button className="w-96 mt-2">Entrar</Button>
            </div>
            <div className="flex items-center mt-4  text-[#659AD6]">
                Já possui uma conta?<Link href={"/pages/login"} className="p-2 text-[#355070]">Fazer Login</Link>
              

            </div>
        </div>

    </div>


 </div>
  );
}
