import { Player } from "@/domain/entities/entity.player";
import { PlayerRepository } from "@/domain/repositories/player.repository";

export class CreateManyPlayer {
    constructor(private playerRepository: PlayerRepository) {}

    async execute(player: Player[]): Promise<Player[]> {
        return await this.playerRepository.createManyPlayers(player);
    }
}