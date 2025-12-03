import { Player } from "../entities/entity.player";


export interface PlayerRepository {
    createPlayer(player: Omit<Player, "id">): Promise<Player>;
    createManyPlayers(players: Player[]): Promise<Player[]>;
    getPlayerById(id: string): Promise<Player>;
    deletePlayerById(id: string): Promise<void>;
    updatePlayer(player: Player): Promise<Player>;
    getPlayerByName(name: string): Promise<Player[]>;
    getAllPlayers(page?: number, size?: number): Promise<Player[]>;
}