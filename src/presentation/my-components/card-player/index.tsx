import { PlayerResponseDto } from "@/infra/dtos/players/players.dto"
import { User } from "lucide-react"

interface CardPlayerProps {
    player: PlayerResponseDto
}

export function CardPlayer({ player }: CardPlayerProps) {
    return (
        <div className="w-[97%] h-20 bg-slate-200 flex gap-1 justify-center items-center p-2 
            shadow-md shadow-slate-400 border border-slate-300 rounded-lg hover:bg-slate-300 hover:scale-105 duration-200">
            {player.ranking && <p className="mr-auto font-mono font-semibold text-cyan-800 min-w-20">#{player.ranking}</p>}
            <p className="mr-auto font-mono font-semibold text-cyan-800 min-w-20"># {player.points}</p>
            <div className="w-1/2 flex justify-start items-center">
                {player.urlPhoto === "https://placehold.co/400x400.png" ? <User className="min-w-[50px]" size={50} color="#302e46" /> : <img src={player.urlPhoto} alt="logo" width={50} height={50} className="object-cover min-w-[50px]" />}
            </div>
            <div className="flex justify-center items-center w-[40%]">
                <p className="truncate text-slate-600 font-semibold">{player.name}</p>
            </div>
        </div>
    )
}