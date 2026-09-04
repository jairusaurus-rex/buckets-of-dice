import { DiceTextString }  from "../../../../commons/DiceTextString";
import { FeatData } from "../../../../../assets/data/FeatData";
import { useMemo, useState } from "react";

type ModularArticleProps = {
    featId: string;
};
export const ModularArticle = ({ featId }: ModularArticleProps) => {
    const [searchTerm, setSearchTerm] = useState("");
    const feat = FeatData.find((feat) => feat.id === featId);
    const subChoices = useMemo(() => {
        const search = searchTerm.toLowerCase();

        return (feat?.subChoices ?? []).filter((subChoice) =>
            subChoice.name.toLowerCase().includes(search) ||
            subChoice.description.toLowerCase().includes(search)
        );
    }, [searchTerm]);
    return (
        <div className="p-2 text-justify">
            <div className="p-2 italic">
                <p className="p-2">{feat?.extra?.lore}</p>
            </div>
            <div className="p-2">
                <p className="p-2">{<DiceTextString>{feat?.description}</DiceTextString>} </p>
                <ul className="list-disc  list-inside pl-4 space-y-2">
                    {
                        feat?.extra?.extraInfo.map((info, index) => (
                            <li key={index}>{info}</li>
                        ))
                    }
                    </ul>
            </div>
            <div className="p-2">
                <p className="p-2"><strong>Advanced:</strong> {<DiceTextString>{feat?.advanced?.description}</DiceTextString>} </p>
                <p className="p-2"><strong>Mastery:</strong> {<DiceTextString>{feat?.mastery?.description}</DiceTextString>} </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 border-t border-[var(--border)] pt-4">
                <h3 className="font-bold">Subchoice List</h3>
                <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search subchoices..."
                    aria-label="Search subchoices"
                    className="w-full md:w-3/4 rounded border border-[var(--border)] bg-[var(--bg)] p-2 text-[var(--text-h)]"
                />

            </div>

            <div className="columns-1 md:columns-2 gap-8">
                {subChoices.map((subChoice) => (
                    <div key={subChoice.id} className="mt-2 p-2  break-inside-avoid">
                        <div className="font-bold">
                            {subChoice.name}
                        </div>

                        <div>
                            <strong></strong> <DiceTextString>{subChoice.description}</DiceTextString>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}