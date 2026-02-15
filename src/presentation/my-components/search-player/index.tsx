import { Input } from "@/components/ui/input"
import { PlayerResponseDto } from "@/infra/dtos/players/players.dto";
import { useFetchPlayerByName } from "@/presentation/hooks/getPlayerByName";
import { User, X } from "lucide-react"
import { useState } from "react";

interface SearchPlayerModalProps {
    setPlayer: (player: PlayerResponseDto) => void
    isVisible: boolean
    onClose: () => void
}


export function SearchPlayerModal({ isVisible, onClose, setPlayer }: SearchPlayerModalProps) {

    const [inputValue, setInputValue] = useState('');
    const { players } = useFetchPlayerByName(inputValue);


    const handleClose = () => {
        setInputValue('');
        onClose();
    };

    const handlePlayerSelected = (player: PlayerResponseDto) => {
        setPlayer(player);
        setInputValue('');
    };


    return (
        <div className={`${isVisible ? 'flex' : 'hidden'} w-full  h-full  absolute 
              backdrop-blur-md bg-white/30 flex justify-center items-start z-50`}>
            <button onClick={handleClose} className="absolute top-4 right-10 w-10 h-10 border flex justify-center items-center rounded-sm cursor-pointer">
                <X size={30} color="#e3e1f0" />
            </button>
            <div className="w-sm md:w-md lg:w-lg h-20 mt-20 flex justify-center items-center bg-slate-300 rounded-2xl text-2xl">
                <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    size={30}
                    placeholder="Busque por um jogador..."
                    className=" w-[90%]  h-12 p-3 bg-slate-100 placeholder:text-lg text-md! font-semibold
                     text-slate-700 placeholder:font-normal  placeholder:tracking-widest focus:border-cyan-700! focus:ring-0!" />
            </div>

            <ul className="absolute  top-42 w-1/3 min-w-[400px] flex flex-col justify-start items-center">
                {(inputValue.length > 3) && players.length > 0 && (
                    players.map((player) => (
                        <li
                            key={player.id}
                            className="w-full flex py-2 bg-slate-100  hover:bg-slate-300  duration-200 transition-all cursor-pointer "
                        >
                            <button onClick={() => handlePlayerSelected(player)} className="text-md font-semibold text-slate-700 p-2 w-full text-left cursor-pointer">{player.name}
                            </button>
                            {player.urlPhoto === "https://placehold.co/400x400.png" ? <div><User size={30} color="#302e46" /></div> : <img src={player.urlPhoto} alt="logo" width={30} className="object-cover min-w-[50px] p-1" /> }
                        </li>
                    ))
                )}

            </ul>
        </div>
    )
}