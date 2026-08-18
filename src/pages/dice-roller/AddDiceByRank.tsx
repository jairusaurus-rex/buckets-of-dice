import d4 from "../../assets/images/dice/d4.png";


type AddDiceByRankProps = {


    addDice: (rank: number) => void;
};
export const AddDiceByRank = ({ addDice }: AddDiceByRankProps) => {
    return (
        <div className="p-0 m-0 text-sm ">
            <span >
                <img role="button"
                    onClick={() => addDice(4)}
                    src={d4}
                    alt={`d4`}
                    className="cursor-pointer h-5 w-5 inline-block"
                /> </span>
            <span role="button" onClick={() => addDice(6)} className="cursor-pointer"> d6 </span>
            <span role="button" onClick={() => addDice(8)} className="cursor-pointer"> d8 </span>
            <span role="button" onClick={() => addDice(10)} className="cursor-pointer"> d10 </span>
            <span role="button" onClick={() => addDice(12)} className="cursor-pointer"> d12 </span>
        </div>
    );
}