import { Player } from "@/core/domain/entities/entity.player";
import { PlayerRepository } from "@/core/domain/repositories/player.repository";


export class CreateManyPlayer {
    constructor(private playerRepository: PlayerRepository) {}

    async execute(player: Player[]): Promise<Player[]> {
       try {
        return await this.playerRepository.createManyPlayers(player);
       } catch (error) {
        console.log(error)
        throw new Error("Error creating players")
       }
    }
}