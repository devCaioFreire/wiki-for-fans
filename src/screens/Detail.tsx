import { useParams } from 'react-router-dom';
import charactersData from '../Characters.json';
import { CardDetail } from "../components/Cards";

export function Detail() {
  const { characterId } = useParams();
  const numericCharacterId = Number(characterId);

  if (isNaN(numericCharacterId) || numericCharacterId < 0 || numericCharacterId >= charactersData.length) {
    return (
      <main className="flex flex-col justify-center p-4 bg-background w-full h-screen">
        <p>Personagem não encontrado</p>
      </main>
    );
  }

  const selectedCharacter = charactersData[numericCharacterId];
  const img = selectedCharacter.thumb;
  console.log(img);

  return (
    <main className="flex flex-col justify-center p-4 bg-background w-full h-screen">
      <div className="absolute -top-0 -left-0 bg-base w-60 h-52 flex p-2 shadow-xl rounded-br-full overflow-auto">
        <img src={`../${selectedCharacter.thumb}`} className='w-40 h-44 object-contain mix-blend-overlay' />
      </div>
      <CardDetail
        name={selectedCharacter.name}
        birthday={selectedCharacter.birthday}
        description={selectedCharacter.description}
        personality={selectedCharacter.personality}
        catchphrase={selectedCharacter.catchphrase}
      />
    </main>
  );
}
