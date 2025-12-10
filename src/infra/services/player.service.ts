import { PlayerRepository } from "@/core/domain/repositories/player.repository";
import { PlayerRequestDto, PlayerResponseDto } from "../dtos/players/players.dto";
import { CreatePlayer } from "@/core/usecases/players-usecases/CreatePlayer";
import { CreateManyPlayer } from "@/core/usecases/players-usecases/CreateManyPlayers";
import { UpdatePlayer } from "@/core/usecases/players-usecases/UpdatePlayer";
import { GetAllPlayers } from "@/core/usecases/players-usecases/GetAllPlayers";


export class PlayerService {
    constructor(private playerRepository: PlayerRepository) { }
    async cratePlayer(playerData: PlayerRequestDto): Promise<PlayerResponseDto> {
            const usecase = new CreatePlayer(this.playerRepository)
            const playerToCreate = { ...playerData, id: null }
            const playerCreated = await usecase.execute(playerToCreate);
            return {...playerCreated,  birthDate: playerCreated.birthDate.toString(), id: playerCreated.id!}
    }

    async createManyPlayers( players: PlayerRequestDto[]): Promise<PlayerResponseDto[]> {
            const usecase = new CreateManyPlayer(this.playerRepository)
            const playersToCreate = players.map(player => ({ ...player, id: null }))
            const playersCreated = await usecase.execute(playersToCreate);
            return playersCreated.map(player => ({...player, birthDate: player.birthDate.toString(), id: player.id!}))
    }

    async getPlayerById(id: string): Promise<PlayerResponseDto> {
            const player = await this.playerRepository.getPlayerById(id);
            return {...player,  birthDate: player.birthDate.toString(), id: player.id!}
    }

    async deletePlayerById(id: string): Promise<void> {
            await this.playerRepository.deletePlayerById(id);
    }

    async updatePlayer(player: PlayerRequestDto): Promise<PlayerResponseDto> {
           const usecase = new UpdatePlayer(this.playerRepository)
           const playerUpdated = await usecase.execute({ ...player , id: null});
           return {...playerUpdated, birthDate: playerUpdated.birthDate.toString(), id: playerUpdated.id!}
    }

    async getPlayerByName(name: string): Promise<PlayerResponseDto[]> {
            const player = await this.playerRepository.getPlayerByName(name);
            return player.map(player => ({...player, birthDate: player.birthDate.toString(), id: player.id!}))
    }

    async getAllPlayers(page?: number, size?: number): Promise<PlayerResponseDto[]> {   
            const pageNumber = page || 0;
            const pageSize = size || 10;    
            const usecase = new GetAllPlayers(this.playerRepository)    
            const players = await usecase.execute(pageNumber, pageSize);
            return players.map(player => ({...player, birthDate: player.birthDate.toString(), id: player.id!}))
    }
}