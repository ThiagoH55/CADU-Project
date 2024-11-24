import { ReactNode } from "react";

interface AnimalDataProps {
  children: ReactNode;
}

export default function AnimalData(props: AnimalDataProps) {
  return (
    <span className=" bg-gray-300 rounded-full px-3 py-1 mr-3 drop-shadow-md text-2xl text-black font-[family-name:var(--font-be-vietnam)]">
      {props.children}
    </span>
  );
}
