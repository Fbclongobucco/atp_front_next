
import { CardPlayer } from "../card-player"
import { PlayerResponseDto } from "@/infra/dtos/players/players.dto"

interface ListRankingProps {
 players: PlayerResponseDto[],
 hiddenList: boolean
 playerSelected: (player: PlayerResponseDto) => void
}

export function ListRanking({players, hiddenList, playerSelected}: ListRankingProps) {

    function hasPlayers() {
        return players.length > 0
    }

    return (
        <div className={`w-sm md:w-md lg:w-2xl h-full py-2 ${hiddenList ? 'hidden' : 'flex'} flex flex-col gap-4 justify-start  bg-slate-200 
        rounded shadow-2xl`}>
            <div className="font-semibold text-2xl bg-slate-300 text-slate-600 p-2 border-b border-slate-400 mb-2 flex justify-between px-4">
                <p className="sm:text-lg italic text-sm">Ranking</p>
                <p className="sm:text-lg ml-50 hidden lg:block italic text-sm" >Pontos</p>
                <p  className="sm:text-lg italic text-sm">Jogadores</p>
            </div>
            { hasPlayers() && players.map((player) => (
                <button onClick={()=> playerSelected(player)} className="w-full flex justify-center cursor-pointer" key={player.id}>
                    <CardPlayer player={player}/>
                </button>
            ))}
            
        </div>
    )
}