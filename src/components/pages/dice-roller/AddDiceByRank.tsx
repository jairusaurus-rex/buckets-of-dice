import d4 from "../../../assets/images/dice/d4.png";
import d6 from "../../../assets/images/dice/d6.png";
import d8 from "../../../assets/images/dice/d8.png";
import d10 from "../../../assets/images/dice/d10.png";
import d12 from "../../../assets/images/dice/d12.png";


type AddDiceByRankProps = {


    addDice: (rank: number) => void;
};
export const AddDiceByRank = ({ addDice }: AddDiceByRankProps) => {
    return (
        <div className="p-0 m-0 text-sm ">
            <span className="py-0 px-1">
                <img role="button"
                    onClick={() => addDice(4)}
                    src={d4}
                    alt={`d4`}
                    className="cursor-pointer h-5 w-5 inline-block"
                />
            </span>
            <span  className="py-0 px-1">
                <img role="button"
                    onClick={() => addDice(6)}
                    src={d6}
                    alt={`d6`}
                    className="cursor-pointer h-5 w-5 inline-block"
                />
            </span>
            <span  className="py-0 px-1">
                <img role="button"
                    onClick={() => addDice(8)}
                    src={d8}
                    alt={`d8`}
                    className="cursor-pointer h-5 w-5 inline-block"
                />
            </span>
            <span className="py-0 px-1" >
                <img role="button"
                    onClick={() => addDice(10)}
                    src={d10}
                    alt={`d10`}
                    className="cursor-pointer h-5 w-5 inline-block"
                />
            </span>
            <span className="py-0 px-1" >
                <img role="button"
                    onClick={() => addDice(12)}
                    src={d12}
                    alt={`d12`}
                    className="cursor-pointer h-5 w-5 inline-block"
                />
            </span>
        </div>
    );
}