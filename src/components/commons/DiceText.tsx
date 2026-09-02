import d4 from "../../assets/images/dice/d4.png";
import d6 from "../../assets/images/dice/d6.png";
import d8 from "../../assets/images/dice/d8.png";
import d10 from "../../assets/images/dice/d10.png";
import d12 from "../../assets/images/dice/d12.png";
import styles from "../layouts/Layout.module.css";

import { type ReactNode } from "react";

type DiceTextProps = {
  children: ReactNode;
}

const dieImageMap: Record<number, string> = {
  4: d4,
  6: d6,
  8: d8,
  10: d10,
  12: d12,
};

const dieTextClassMap: Record<number, string> = {
  4: styles.textD4,
  6: styles.textD6,
  8: styles.textD8,
  10: styles.textD10,
  12: styles.textD12,
};

export default function DiceText({
  children
}: DiceTextProps) {

  const dieValue = Number(children);
  const imageSrc = dieImageMap[dieValue] ?? d4;
  const textClass = dieTextClassMap[dieValue] ?? "";

  return (

    <span className="inline-flex items-center gap-[2px] leading-none">
      <span className={`${textClass}`}>{`d${dieValue}`}</span>
      <img
        src={imageSrc}
        alt={`d${dieValue}`}
        className="inline-block object-contain"
        style={{ width: "15px", height: "15px" }}
      />
    </span>

  );
}