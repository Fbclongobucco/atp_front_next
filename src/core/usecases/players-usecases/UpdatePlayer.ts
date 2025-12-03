import { Player } from "@/core/domain/entities/entity.player";
import { PlayerRepository } from "@/core/domain/repositories/player.repository";


export class UpdatePlayer {
    constructor(private playerRepository: PlayerRepository) {}
    async execute(player: Player): Promise<Player> {
        try {
            return await this.playerRepository.updatePlayer(player);
        } catch (error) {
            console.log(error)
            throw new Error("Error updating player");
        }
    }
}