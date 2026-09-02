import { type ReactNode } from "react";
import DiceText from "./DiceText";

type DiceTextStringProps = {
  children: ReactNode;
};

export default function DiceTextString({
  children,
}: DiceTextStringProps) {

  // Matches d followed by one or more numbers
  const parts = children?.toString().split(/(d\d+)/gi);
  if (!parts) { return children; }
  return (
    <>
      {
        parts.map((part, index) => {

          // Check if this part is a dice notation
          const match = part.match(/^d(\d+)$/i);

          if (match) {
            const dieValue = Number(match[1]);

            return (
              <DiceText key={index}>
                {dieValue}
              </DiceText>
            );
          }

          return <span key={index}>{part}</span>;
        })}
    </>
  );
}
