
interface CardProps {
  thumb?: string;
  name: string;
  birthday?: string;
  description?: string;
  personality?: string;
  catchphrase?: string;
}

export const Card = ({ thumb, name }: CardProps) => {
  return (
    <div className="min-h-24 h-full p-4 bg-background shadow-lg rounded-2xl">
      <div className="flex h-full items-center justify-between md:justify-center md:gap-8
      md:flex-col">
        <span>{name}</span>
        <img src={thumb} className="w-1/4 h-24 object-contain md:w-1/2" />
      </div>
    </div>
  )
}

export const CardDetail = ({ name, birthday, description, personality, catchphrase }: CardProps) => {
  return (
    <div className="flex flex-col relative top-[calc(50%-30%)]">
      <div className="flex flex-col justify-between gap-8 py-5 overflow-auto max-h-80">
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold">{name}</span>
          <span className="text-xs text-zinc-400">{birthday}</span>
        </div>

        <p>{description}</p>
        <span><strong>Personality:</strong><br /> {personality}</span>
        <span><strong>Catchphrase:</strong><br /> {catchphrase}</span>
      </div>
      <a href="/" className="flex p-2 mt-12 items-end justify-center rounded-full border-2 border-stone-700">Voltar</a>
    </div>
  )
}