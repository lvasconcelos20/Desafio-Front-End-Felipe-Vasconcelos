import { Search } from "lucide-react";
import Input from "../Input/input";

export default function SearchInput(){
    return(
        <div className="relative">
            <Search className=" absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground "/>
            <Input type="search" placeholder="Busque pelo nome do Pókemon..." className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px] "/>
        </div>
    )
}