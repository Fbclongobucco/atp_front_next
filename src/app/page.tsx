"use client"

import { PlayerResponseDto } from "@/infra/dtos/players/players.dto";
import { useFetchPlayers } from "@/presentation/hooks/getAllPlayers";
import { CardDetails } from "@/presentation/my-components/card-details";
import { Header } from "@/presentation/my-components/header";
import { ListRanking } from "@/presentation/my-components/list-ranking";
import { RankingListControll } from "@/presentation/my-components/ranking-list-controll";
import { SearchPlayerModal } from "@/presentation/my-components/search-player";
import { useState } from "react";

export default function Home() {

  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isCardDetailsOpen, setIsCardDetailsOpen] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState<PlayerResponseDto | null>(null);
  const { nextPage, prevPage, reSize, page, size, players } = useFetchPlayers();

  const handlePlayerSelected = (player: PlayerResponseDto) => {
    setSelectedPlayer(player);
    setIsCardDetailsOpen(true);
  };

   function handleCloseDetails() {
    setIsCardDetailsOpen(false);
    setSelectedPlayer(null);
  }

  return (
    <div className={`w-full  p-1  bg-slate-500 flex flex-col justify-center items-center relative ${isCardDetailsOpen || isSearchModalOpen ? 'h-screen' : ''}`}>
      <Header onSearchClick={() => setIsSearchModalOpen(true)} />
      <SearchPlayerModal
        isVisible={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
        setPlayer={handlePlayerSelected} />
      <RankingListControll nextPage={nextPage} prevPage={prevPage} page={page} size={size} reSize={reSize} totalPages={players.length}/>  
      <ListRanking players={players} playerSelected={handlePlayerSelected} hiddenList={isCardDetailsOpen || isSearchModalOpen}/>
      <CardDetails player={selectedPlayer} isOpen={isCardDetailsOpen} onClose={handleCloseDetails}/>
    </div>
  );
}