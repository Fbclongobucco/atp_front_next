import { Player } from "@/core/domain/entities/entity.player";
import { PlayerRepository } from "@/core/domain/repositories/player.repository";


export class GetAllPlayers {
    constructor(private playerRepository: PlayerRepository) {}
    async execute(page?: number, size?: number): Promise<Player[]> {
        try {
            return await this.playerRepository.getAllPlayers(page, size);
        } catch (error) {
            console.log(error)
            throw new Error("Error getting players")
        }
    }
}