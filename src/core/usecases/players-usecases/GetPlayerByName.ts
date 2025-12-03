import { Player } from "@/core/domain/entities/entity.player";
import { PlayerRepository } from "@/core/domain/repositories/player.repository";


export class GetPlayerByName {
    constructor(private playerRepository: PlayerRepository) {}
    async execute(name: string): Promise<Player[]> {
        try {
            const player = await this.playerRepository.getPlayerByName(name);
            return player
        } catch (error) {
            console.log(error)
            throw new Error("Error getting player")
        }
    }
}