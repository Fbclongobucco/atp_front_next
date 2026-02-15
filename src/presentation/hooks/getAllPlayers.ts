import { PlayerResponseDto } from '@/infra/dtos/players/players.dto';
import { useState, useEffect, useCallback } from 'react';
import {PlayerService} from '@/infra/services/player.service';
import { PlayerRepositoryImpl } from '@/infra/repository/PlayerRepositoryImpl';

interface UseFetchPlayersResult {
    players: PlayerResponseDto[];
    isLoading: boolean;
    error: Error | null;
    nextPage: () => void;
    prevPage: () => void;
    reSize: (size: number) => void;
    size: number
    page: number
    totalPages: number
   
}

export const useFetchPlayers = (initialPage: number = 0, initialSize: number = 10): UseFetchPlayersResult => {
    const [players, setPlayers] = useState<PlayerResponseDto[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<Error | null>(null);
    const [page, setPage] = useState(initialPage);
    const [size, setSize] = useState(initialSize);
    const [totalPages, setTotalPages] = useState(0);
    

    const playerService = new PlayerService(new PlayerRepositoryImpl());

    const fetchPlayers = useCallback(async (p: number, s: number) => {
        setIsLoading(true);
        setError(null);
        try {
            const data = await playerService.getAllPlayers(p, s);
            setTotalPages(data.length);
            setPlayers(data);
        } catch (err) {
            setError(err as Error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPlayers(page, size);
    }, [fetchPlayers, page, size]);


    const nextPage = () => {
        setPage(page + 1);
    };

    const prevPage = () => {
        if (page > 0) {
            setPage(page - 1);
        }
    };

    const reSize = (size: number) => {
        if(size < 0){
            size = 0
        }
        setSize(size);
    };
    

    return { players, isLoading, error, nextPage, prevPage, reSize, size, page, totalPages };
};