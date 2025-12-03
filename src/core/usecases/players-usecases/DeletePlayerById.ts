import { PlayerRepository } from "@/domain/repositories/player.repository";

export class DeletePlayerById {
    constructor(private playerRepository: PlayerRepository) {}
    async execute(id: string): Promise<void> {
        return this.playerRepository.deletePlayerById(id);
    }
}