import { useState } from "react";
import { Link } from 'react-router-dom';
import charactersData from '../Characters.json';
import { Card } from "../components/Cards";
import { Header } from "../components/Header";

export function Home() {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const isMainTab = activeTab === "main";
  const isSecTab = activeTab === "secundary";

  let containerClassName = "h-full";

  if (isMainTab) {
    containerClassName = "h-[calc(100vh-160px)]";
  } else if (isSecTab) {
    containerClassName = "h-[calc(100vh-160px)]";
  }

  const filteredCharacters =
    activeTab === "all"
      ? charactersData
      : charactersData.filter((character) =>
        activeTab === "main" ? character.main : character.secundary
      );

  return (
    <>
      <Header activeTab={activeTab} onTabClick={handleTabClick} />
      <main className={`bg-base w-full p-4 grid gap-4 
      sm:grid-cols-1 sm:h-full
      md:grid-cols-3 md:${containerClassName}
      2xl:grid-cols-4`}>
        {filteredCharacters.map((character, index) => (
          <Link to={`/detail/${index}`} className="h-full">
            <Card key={index} name={character.name} thumb={character.thumb} />
          </Link>
        ))}
      </main>
    </>
  )
}