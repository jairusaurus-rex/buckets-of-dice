import type { DiceType } from "../../data-types/types/DiceType";
import d4 from "../../assets/images/dice/d4.png";
import d6 from "../../assets/images/dice/d6.png";
import d8 from "../../assets/images/dice/d8.png";
import d10 from "../../assets/images/dice/d10.png";

type DieCardProps = {
  die: DiceType;
  onRemoveDice: (id: string) => void;
  onUpDiceRank: (id: string) => void;
  onDownDiceRank: (id: string) => void;
  onChangeDiceTitle: (id: string, title: string) => void;
  onDiceClick?: (id: string) => void;
};

export const DieCard = ({
  die,
  onRemoveDice: onRemoveDice,
  onUpDiceRank: onUpDiceRank,
  onDownDiceRank: onDownDiceRank,
  onChangeDiceTitle: onChangeDiceTitle,
  onDiceClick: onDiceClick
}: DieCardProps) => {

  return (
    <div className="relative w-28">


      {/* Card */}
      <div
        className="
        relative
        h-28
        w-28
        rounded-lg
        border
        border-[var(--border)]
        bg-[var(--border)]
        "
      >
        {/* Die type */}
        <div className="text-center text-xs font-medium color-[var(--muted)]">
          D{die.rank}
        </div>

        {/* Delete */}
        <button
          type="button"
          onClick={() => onRemoveDice(die.id)}
          aria-label="Delete die"
          className="
            cursor-pointer
            absolute
            right-1
            top-1
            z-30
            flex
            h-4
            w-4
            items-center
            justify-center
            color-[var(--muted)]
            hover:text-red-400
          "
        >
          ×
        </button>

        {/* Decrease */}
        <button
          type="button"
          onClick={() => onDownDiceRank(die.id)}
          disabled={die.rank <= 2}
          aria-label="Decrease die size"
          className="
            cursor-pointer
            absolute
            left-0
            top-1/2
            z-20
            -translate-y-1/2
            text-sm
            color-[var(--muted)]
            disabled:opacity-20
            hover:text-[var(--hover)]
          "
        >
          −
        </button>

        {/* Increase */}
        <button
          type="button"
          onClick={() => onUpDiceRank(die.id)}
          aria-label="Increase die size"
          className="
            absolute
            cursor-pointer
            right-0
            top-1/2
            z-20
            -translate-y-1/2
            text-sm
            color-[var(--muted)]
            hover:text-[var(--hover)]
          "
        >
          +
        </button>

        {/* Clickable die */}
        <button
          type="button"
          onClick={() => onDiceClick?.(die.id)}
          className="
            absolute
            inset-3
            flex
            items-center
            justify-center
            rounded
            focus:outline-none
          "
        >
          <img
            src={
              die.rank === 4 ? d4 : die.rank === 6 ? d6 : die.rank === 8 ? d8 :  d10 }
            alt={`D${die.rank}`}
            className="
              h-full
              w-full
              object-contain
            "
          />

          {/* Result over the die */}
          <span
            className="
              pointer-events-none
              absolute
              inset-0
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              text-[var(--text-h)]
            "
          >
            {die.result ?? ""}
          </span>
        </button>

        {/* Name */}
        <input
          type="text"
          value={die.title ?? ""}
          onChange={(e) => onChangeDiceTitle(die.id, e.target.value)}
          placeholder="..."
          aria-label="Die name"
          className="
            absolute
            bottom-0
            left-3
            right-3
            z-20
            h-5
            w-[calc(100%-1.5rem)]
            bg-transparent
            px-1
            text-center
            text-[var(--text)]
            outline-none
            placeholder:text-gray-500
            focus:border-b
            focus:border-gray-500
          "
        />
      </div>
    </div>
  );
};

export default DieCard;