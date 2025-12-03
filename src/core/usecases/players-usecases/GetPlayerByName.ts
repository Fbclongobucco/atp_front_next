import { Player } from "@/domain/entities/entity.player";
import { PlayerRepository } from "@/domain/repositories/player.repository";

export class GetPlayerByName {
    constructor(private playerRepository: PlayerRepository) {}
    async execute(name: string): Promise<Player[]> {
        return this.playerRepository.getPlayerByName(name);
    }
}