import { PlayerRepository } from "@/core/domain/repositories/player.repository";

export class DeletePlayerById {
    constructor(private playerRepository: PlayerRepository) {}
    async execute(id: string): Promise<void> {
        try {
            await this.playerRepository.deletePlayerById(id);
        } catch (error) {
            console.log(error)
            throw new Error("Error deleting player")
        }
    }
}