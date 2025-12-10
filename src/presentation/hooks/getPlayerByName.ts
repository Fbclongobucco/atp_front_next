import { PlayerResponseDto } from "@/infra/dtos/players/players.dto";
import { PlayerRepositoryImpl } from "@/infra/repository/PlayerRepositoryImpl";
import { PlayerService } from "@/infra/services/player.service";
import { useCallback, useEffect, useState } from "react";

export const useFetchPlayerByName = (name: string) =>{
    const [players, setPlayers] = useState<PlayerResponseDto[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);

    const playerService = new PlayerService(new PlayerRepositoryImpl());

    const fetchPlayerByName = useCallback(async (name: string) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await playerService.getPlayerByName(name);
            setPlayers(data);
        } catch (err) {
            setError(err as Error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPlayerByName(name);
    }, [fetchPlayerByName, name]);
    

    return {
        players,
        isLoading,
        error
    }
}