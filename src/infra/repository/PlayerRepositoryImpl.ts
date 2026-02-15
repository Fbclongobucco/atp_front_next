import { PlayerRepository } from "@/core/domain/repositories/player.repository";
import { api } from "../http/api";
import { Player } from "@/core/domain/entities/entity.player";
export class PlayerRepositoryImpl implements PlayerRepository {
    async createPlayer(player: Player): Promise<Player> {
        const { data } = await api.post<Player>("/players", player);
        return data;
    }
    async createManyPlayers(players: Player[]): Promise<Player[]> {
        const { data } = await api.post<Player[]>("/players", players);
        return data;
    }
    async getPlayerById(id: string): Promise<Player> {
        const { data } = await api.get<Player>(`/players/${id}`);
        return data;}
    async deletePlayerById(id: string): Promise<void> {
       await api.delete(`/players/${id}`);
    }
    async updatePlayer(player: Player): Promise<Player> {
        const { data } = await api.put<Player>(`/players/${player.id}`, player);
        return data;
    }
    async getPlayerByName(name: string): Promise<Player[]> {
       const { data } = await api.get<Player[]>(`/players/search?name=${name}`);
        return data
    }
    async getAllPlayers(page?: number, size?: number): Promise<Player[]> {
        const { data } = await api.get<Player[]>(`/players?page=${page}&size=${size}`);
        return data;
    }
}