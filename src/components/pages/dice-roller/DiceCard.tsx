import type { DiceType } from "../../../data-types/types/DiceType";
import d4 from "../../../assets/images/dice/d4.webp";
import d6 from "../../../assets/images/dice/d6.webp";
import d8 from "../../../assets/images/dice/d8.webp";
import d10 from "../../../assets/images/dice/d10.webp";
import d12 from "../../../assets/images/dice/d12.webp";

type DieCardProps = {
  die: DiceType;
  onRemoveDice: (id: string) => void;
  onUpDiceRank: (id: string) => void;
  onDownDiceRank: (id: string) => void;
  onChangeDiceTitle: (id: string, title: string) => void;
  onDiceClick?: (rank: number, title: string) => void;
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
        {/*
        <div className="text-center text-xs font-medium color-[var(--muted)]">
          D{die.rank}
        </div>
          */}
        {/* Delete */}
        <button
          type="button"
          onClick={() => onRemoveDice(die.id)}
          aria-label="Delete die"
          tabIndex={-1}
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
          tabIndex={-1}
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
          tabIndex={-1}
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
          onClick={() => onDiceClick?.(die.rank, die.title)}
          tabIndex={-1}
          className="
            absolute
            inset-2
            flex
            items-center
            justify-center
            rounded
            focus:outline-none
          "
        >

          <img
            src={
              die.rank === 4 ? d4 : die.rank === 6 ? d6 : die.rank === 8 ? d8 : die.rank === 10 ? d10 : d12}
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

            {die.result ?
              <span className="[-webkit-text-stroke:1px_var(--border)]">
                {die.result}
              </span>
              : ""}
          </span>
        </button>

        {/* Name */}
        <input
          type="text"
          value={die.title ?? ""}
          maxLength={25}
          onChange={(e) => onChangeDiceTitle(die.id, e.target.value)}
          placeholder="..."
          aria-label="Die name"
          className={`
              absolute
              bottom-0
              left-3
              right-3
              z-30
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
              ${!die.title
              ? "text-lg"
              : die.title.length < 6
                ? "text-lg"
                : die.title.length < 9
                  ? "text-base"
                  : die.title.length < 12
                    ? "text-sm"
                    : die.title.length < 15
                      ? "text-xs"
                      : die.title.length < 18
                        ? "text-[0.625rem]"
                        : die.title.length < 21
                          ? "text-[0.5rem]"
                          : "text-[0.375rem]"
            }
            `
          }
        />
      </div>
    </div>
  );
};

export default DieCard;