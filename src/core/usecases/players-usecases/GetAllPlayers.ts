import { Player } from "@/domain/entities/entity.player";
import { PlayerRepository } from "@/domain/repositories/player.repository";

export class GetAllPlayers {
    constructor(private playerRepository: PlayerRepository) {}
    async execute(page: number, size: number): Promise<Player[]> {
        return this.playerRepository.getAllPlayers(page, size);
    }
}