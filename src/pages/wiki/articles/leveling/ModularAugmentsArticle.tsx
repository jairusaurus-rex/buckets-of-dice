import { useState } from "react";
import { FeatData } from "../../../../assets/data/FeatData";
import DiceTextString from "../../../../components/commons/DiceTextString";


export const ModularAugmentsArticle = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const featId = "modular-augments";
    const feat = FeatData
        .filter((feat) => feat.id === featId)[0];
    const subChoices = (feat.subChoices ?? [])
        .filter((feat) => {
            const search = searchTerm.toLowerCase();
            return (
                feat.name.toLowerCase().includes(search) ||
                feat.description.toLowerCase().includes(search)
            );
        });
    return (
        <div className="p-2 text-justify">
            <p className="p-2">Due to genetics or mutations, picking this feat alters the person to be more than what others of their species are.  </p>
            <p className="p-2">{<DiceTextString>{feat.description}</DiceTextString>} </p>
            <p className="p-2"><strong>Advanced:</strong> {<DiceTextString>{feat.advanced?.description}</DiceTextString>} </p>
            <p className="p-2"><strong>Mastery:</strong> {<DiceTextString>{feat.mastery?.description}</DiceTextString>} </p>
            <div className="flex flex-col md:flex-row md:justify-between gap-4">
                <h3 className="font-bold">Feat List</h3>
                <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search feats..."
                    aria-label="Search non-suit feats"
                    className="mb-4 w-full md:w-3/4 rounded border border-[var(--border)] bg-[var(--bg)] p-2 text-[var(--text-h)]"
                />

            </div>

            <div className="columns-1 md:columns-2 gap-8">
                {subChoices.map((feat) => (
                    <div key={feat.id} className="mt-2 p-2  break-inside-avoid">
                        <div className="font-bold">
                            {feat.name}
                        </div>

                        <div>
                            <strong></strong> <DiceTextString>{feat.description}</DiceTextString>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}