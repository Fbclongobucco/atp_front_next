import { PlayerRepository } from "@/core/domain/repositories/player.repository";
import { PlayerRequestDto, PlayerResponseDto } from "../dtos/players/players.dto";
import { CreatePlayer } from "@/core/usecases/players-usecases/CreatePlayer";
import { CreateManyPlayer } from "@/core/usecases/players-usecases/CreateManyPlayers";


export class PlayerService {
    constructor(private playerRepository: PlayerRepository) { }
    async cratePlayer(playerData: PlayerRequestDto): Promise<PlayerResponseDto> {
        try {
            const usecase = new CreatePlayer(this.playerRepository)
            const playerToCreate = { ...playerData, id: null }
            const playerCreated = await usecase.execute(playerToCreate);

            return {...playerCreated, id: playerCreated.id!}

        } catch (error) {
            console.log(error)
            throw new Error("Error creating player")
        }
    }

    async createManyPlayers( players: PlayerRequestDto[]): Promise<PlayerResponseDto[]> {
        try {
            const usecase = new CreateManyPlayer(this.playerRepository)
            const playersToCreate = players.map(player => ({ ...player, id: null }))
            const playersCreated = await usecase.execute(playersToCreate);
            return playersCreated.map(player => ({...player, id: player.id!}))
        } catch (error) {
            console.log(error)
            throw new Error("Error creating players")
        }
    }

    async getPlayerById(id: string): Promise<PlayerResponseDto> {
        try {
            const player = await this.playerRepository.getPlayerById(id);
            return {...player, id: player.id!}
        } catch (error) {
            console.log(error)
            throw new Error("Error getting player")
        }
    }

    async deletePlayerById(id: string): Promise<void> {
        try {
            await this.playerRepository.deletePlayerById(id);
        } catch (error) {
            console.log(error)
            throw new Error("Error deleting player")
        }
    }

    async updatePlayer(player: PlayerRequestDto): Promise<PlayerResponseDto> {
        try {
            const playerToUpdate = { ...player, id: null }
            const playerUpdated = await this.playerRepository.updatePlayer(playerToUpdate);
            return {...playerUpdated, id: playerUpdated.id!}
        } catch (error) {
            console.log(error)
            throw new Error("Error updating player")
        }
    }

    async getPlayerByName(name: string): Promise<PlayerResponseDto[]> {
        try {
            const player = await this.playerRepository.getPlayerByName(name);
            return player.map(player => ({...player, id: player.id!}))
        } catch (error) {
            console.log(error)
            throw new Error("Error getting player")
        }
    }

    async getAllPlayers(page?: number, size?: number): Promise<PlayerResponseDto[]> {
        try {
            const players = await this.playerRepository.getAllPlayers(page, size);
            return players.map(player => ({...player, id: player.id!}))
        } catch (error) {
            console.log(error)
            throw new Error("Error getting players")
        }
    }
}