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
    <div className=" w-full h-screen flex flex-row relative overflow-hidden">
    <div className="w-2/4 h-full relative bg-gradient-to-b from-[#B1D5FF] via-[#2C8EFD] to-[#004FAA] flex items-center justify-center">
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center text-white text-center px-10 pt-22">
              <p className="text-5xl font-bold mb-8">A evolução começa com um clique!</p>
    
              <div className="relative w-[650px] h-[400px] ">
                <Image
                  src="/pokemons.png"
                  alt="pokemons"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
    <div className="w-1/2 h-full relative z-10">
        <Image src="/background.png" alt="Fundo" fill className="object-cover z-0" />
        <div className="flex flex-col items-center justify-center relative w-full h-screen ">
        <Image src="/logo.png" alt="Fundo" width={450} height={238} />
            <div className="flex flex-col mt-14">         
                <InputField register={register} name="name" placeholder="Insira seu nome " label="Nome" type="name"  />
                <InputField register={register} name="username" placeholder="Insira seu nome de usuário " label="Nome de usuário" type="username"  />
                <InputField register={register} name="email" placeholder="Insira seu email " label="E-mail" type="email"  />
                <InputField register={register} name="password" placeholder="Insira sua senha" label="Senha" type="password"  />
                <Button className="w-96 h-10 text-xl bg-gradient-to-b  from-[#B1D5FF] via-[#4A709C] to-[#004FAA] ">Entrar</Button>
            </div>
            <div className="flex items-center mt-4  text-[#659AD6]">
                Já possui uma conta?<Link href={"/pages/login"} className="p-2 text-[#355070]">Fazer Login</Link>
              

            </div>
        </div>

    </div>


 </div>
  );
}
