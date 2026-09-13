import { DiceTextString } from "../../../../commons/DiceTextString";
import { FeatData } from "../../../../../assets/data/FeatData";
import { useMemo, useState } from "react";
import { ListLayout } from "../../../../commons/ListLayout";

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

            <ListLayout
                title="Subchoice List"
                showSearch
                searchValue={searchTerm}
                searchPlaceholder="Search subchoices..."
                onSearchChange={setSearchTerm}
                items={subChoices}
                getKey={(subChoice) => subChoice.id}
                renderItem={(subChoice) => (
                    <>
                        <div className="font-bold">
                            {subChoice.name}
                        </div>
                        <div>
                            <strong></strong> <DiceTextString>{subChoice.description}</DiceTextString>
                        </div>
                    </>
                )}
            />
        </div>
    )
}