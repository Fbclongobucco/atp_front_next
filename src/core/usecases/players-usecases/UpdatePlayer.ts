import { Player } from "@/domain/entities/entity.player";
import { PlayerRepository } from "@/domain/repositories/player.repository";

export class UpdatePlayer {
    constructor(private playerRepository: PlayerRepository) {}
    async execute(player: Player): Promise<Player> {
        return this.playerRepository.updatePlayer(player);
    }
}