import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PlayerResponseDto } from "@/infra/dtos/players/players.dto"
import { User, X } from "lucide-react";
import { countryToISO } from "../../utils/country-map";

interface CardDetailsProps {
    player: PlayerResponseDto | null,
    isOpen: boolean
    onClose: () => void
}

function birthDateToAge(birthDate: string) {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDiff = today.getMonth() - birthDateObj.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDateObj.getDate())) {
        age--;
    }
    return age;
}

export function CardDetails({ player, isOpen, onClose }: CardDetailsProps) {

    if (!player) {
        return null
    }

    const flagCode = countryToISO[player.country] || "xx";
   

    return (
        <div className={`w-full h-full ${isOpen ? 'flex' : 'hidden'} top-0 justify-center items-center absolute 
        backdrop-blur-xl bg-slate-700/50  z-50`}>
               <button onClick={() => onClose()} className="absolute top-4 right-6 w-10 h-10 border flex justify-center 
                        items-center border-slate-400 rounded-sm cursor-pointer">
                        <X size={30} color="#848388" />
                    </button>
            {player && (
                <Card className="w-sm md:w-md lg:w-lg animate__animated animate__backInDown">
                    <CardHeader>
                        <CardTitle>
                            <span className="text-cyan-800 text-2xl">#{player.ranking}</span> <span className="text-slate-600 text-2xl font-mono ml-3">{player.name}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="flex justify-center gap-2 lg:gap-10">
                       {player.urlPhoto ===  "https://placehold.co/400x400.png" ? <div className="w-45 h-90 flex justify-center items-center "><User size={200}color="#302e46" /></div> :   <img src={player.urlPhoto} alt="logo" width={200} className="object-cover border rounded  shadow-slate-500 shadow-md bg-slate-300" />}
                        <div className="flex flex-col text-xs md:text-lg gap-6 font-medium text-slate-600">
                            <p className="bg-slate-200 rounded p-1">Forehand: <span className="tracking-wide">{player.forehand}</span></p>
                            <p className="bg-slate-200 rounded p-1">Backhand: <span className="tracking-wide">{player.backhand}</span></p>
                            <p className="bg-slate-200 rounded p-1">Altura: <span className="text-md tracking-wide uppercase">{player.height} Cm</span></p>
                            <p className="bg-slate-200 rounded p-1">Peso: <span className="text-md tracking-wide uppercase">{player.weight} Kg</span></p>
                            <p className="bg-slate-200 rounded p-1 flex justify-start items-center">
                                País: <img src={`https://flagcdn.com/${flagCode}.svg`} width={25} alt="flag" className="ml-2" />
                            </p>
                            <p className="bg-slate-200 rounded p-1">Aniversário: <span className="text-md tracking-wide uppercase">{player.birthDate}</span></p>
                            <p className="bg-slate-200 rounded p-1">Idade: <span className="text-md tracking-wide uppercase">{birthDateToAge(player.birthDate)} anos</span></p>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    )
}