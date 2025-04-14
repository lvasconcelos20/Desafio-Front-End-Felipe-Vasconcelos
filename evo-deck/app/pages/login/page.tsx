
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
export default function Login() {
    return (
     <div className=" w-full h-screen flex flex-row-reverse">
        <div>
          

        </div>
        <div className="w-full  h-screen relative basis-2/3">
            <Image src="/background.png" alt="Fundo" fill className="object-cover" />
            <div className="flex flex-col items-center justify-center relative w-full h-screen ">
            <Image src="/logo.png" alt="Fundo" width={450} height={238} />
                <div className="flex flex-col gap-6 mt-20">         
                    <Input className="w-96"/>
                    <Input className="w-96"/>
                  <Button className="w-96">Entrar</Button>
                </div>
                <div className="flex items-center mt-4">
                    <h2 className="text-sm text-[#659AD6]">Não possui cadastro?</h2>

                </div>
            </div>

        </div>


     </div>
    );
  }
  