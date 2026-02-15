import { User } from "lucide-react";

export function CardCreate(){
    return(
        <div className="w-[90%] h-20 bg-slate-200 flex gap-1 justify-center items-center p-2 
            shadow-md shadow-slate-400 border border-slate-300 rounded-lg hover:bg-slate-300 hover:scale-105 duration-200 cursor-pointer">
            <div className="w-1/2 flex justify-start items-center">
                <User className="min-w-[50px]" size={50} color="#302e46" />
            </div>
            <div className="flex justify-center items-center w-[40%]">
                <p className="truncate text-slate-600 font-semibold">Criar novo jogador</p>
            </div>
        </div>
    )
}