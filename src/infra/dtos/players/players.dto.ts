export type PlayerRequestDto = {
    name: string;
    ranking: number;
    country: string;
    forehand: string;
    backhand: string;
    birthDate: Date;
    height: number;
    weight: number;
    urlPhoto: string;
}

export type PlayerResponseDto = {
    id: string;
    name: string;
    ranking: number;
    country: string;
    forehand: string;
    backhand: string;
    birthDate: string;
    height: number;
    weight: number;
    urlPhoto: string;
}