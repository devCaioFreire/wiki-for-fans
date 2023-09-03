import { ReactNode } from "react";


type Props = {
  children: ReactNode;
}
export function Container({ children }: Props) {
  return (
    <div className="flex flex-col items-center justify-center w-full mx-auto max-w-[1246px]">
      {children}
    </div>
  )
}
