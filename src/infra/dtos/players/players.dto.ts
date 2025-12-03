export type PlayerRequestDto = {
    name: string;
    ranking: number;
    country: string;
    forehand: string;
    backhand: string;
    birthdate: Date;
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
    birthdate: Date;
    height: number;
    weight: number;
    urlPhoto: string;
}