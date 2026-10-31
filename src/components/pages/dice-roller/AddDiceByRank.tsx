import d4 from "../../../assets/images/dice/d4.webp";
import d6 from "../../../assets/images/dice/d6.webp";
import d8 from "../../../assets/images/dice/d8.webp";
import d10 from "../../../assets/images/dice/d10.webp";
import d12 from "../../../assets/images/dice/d12.webp";
import { useUser } from "../../../contexts/UserContext";
import { useRef } from "react";
import { DiceText } from "../../commons/DiceText";


type AddDiceByRankProps = {


    addDice: (rank: number) => void;
};
export const AddDiceByRank = ({ addDice }: AddDiceByRankProps) => {
    const { userOptions } = useUser();
    const userOptionsRef = useRef(userOptions);
    return (
        <div className="p-0 m-0 text-sm ">
            <span className="py-0 px-1">
                {userOptionsRef.current?.DisplayDiceRate
                    ?
                    <div role="button"
                        onClick={() => addDice(4)}
                        className="inline-flex items-center gap-[2px] leading-none"
                    >
                        <DiceText>4</DiceText>
                    </div>
                    :
                    <img role="button"
                        onClick={() => addDice(4)}
                        src={d4}
                        alt={`d4`}
                        className="cursor-pointer h-5 w-5 inline-block"
                    />
                }
            </span>
            <span className="py-0 px-1">
                {userOptionsRef.current?.DisplayDiceRate
                    ?
                    <div role="button"
                        onClick={() => addDice(6)}
                        className="inline-flex items-center gap-[2px] leading-none"
                    >
                        <DiceText>6</DiceText>
                    </div>
                    :
                    <img role="button"
                        onClick={() => addDice(6)}
                        src={d6}
                        alt={`d6`}
                        className="cursor-pointer h-5 w-5 inline-block"
                    />
                }
            </span>
            <span className="py-0 px-1">
                {userOptionsRef.current?.DisplayDiceRate
                    ?
                    <div role="button"
                        onClick={() => addDice(8)}
                        className="inline-flex items-center gap-[2px] leading-none"
                    >
                        <DiceText>8</DiceText>
                    </div>
                    :
                    <img role="button"
                        onClick={() => addDice(8)}
                        src={d8}
                        alt={`d8`}
                        className="cursor-pointer h-5 w-5 inline-block"
                    />
                }
            </span>
            <span className="py-0 px-1" >
                {userOptionsRef.current?.DisplayDiceRate
                    ?
                    <div role="button"
                        onClick={() => addDice(10)}
                        className="inline-flex items-center gap-[2px] leading-none"
                    >
                        <DiceText>10</DiceText>
                    </div>
                    :
                    <img role="button"
                        onClick={() => addDice(10)}
                        src={d10}
                        alt={`d10`}
                        className="cursor-pointer h-5 w-5 inline-block"
                    />
                }
            </span>
            <span className="py-0 px-1" >
                {userOptionsRef.current?.DisplayDiceRate
                    ?
                    <div role="button"
                        onClick={() => addDice(12)}
                        className="inline-flex items-center gap-[2px] leading-none"
                    >
                        <DiceText>12</DiceText>
                    </div>
                    :
                    <img role="button"
                        onClick={() => addDice(12)}
                        src={d12}
                        alt={`d12`}
                        className="cursor-pointer h-5 w-5 inline-block"
                    />
                }
            </span>
        </div>
    );
}