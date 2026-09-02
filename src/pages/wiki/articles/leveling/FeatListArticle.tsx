import { useState } from "react";
import { FeatData } from "../../../../assets/data/FeatData";
import DiceTextString from "../../../../components/commons/DiceTextString";
import { Link } from "react-router-dom";
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum";


export const FeatListArticle = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const featData = FeatData
        .filter((feat) => feat.species == null)
        .filter((feat) => {
            const search = searchTerm.toLowerCase();

            return (
                feat.name.toLowerCase().includes(search) ||
                feat.description.toLowerCase().includes(search)
            );
        })
        .sort((a, b) => a.name.localeCompare(b.name));
    return (
        <div className="p-2 text-justify">
            <p className="p-2">Each level a spacer gains a new feat </p>
            <p className="p-2">Starting at level 4, instead of gaining a new feat, you can
                choose to instead add an Advanced form of a feat you already have.</p>
            <p className="p-2">Starting at level 8, instead of gaining a new feat, you can
                choose to instead add an Mastery form of a feat you already have an
                Advanced form in.</p>
            <p className="p-2">At level 10, choose to gain 2 feats instead of 1. You can
                use these to gain a Advanced or Masteries</p>
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
                {featData.map((feat) => (
                    <div key={feat.id} className="mt-2 p-2  break-inside-avoid">
                        <div className="font-bold">
                            <h4>{feat.name}</h4>
                        </div>

                        <div>
                            <strong>Description:</strong> <DiceTextString>{feat.description}</DiceTextString>
                        </div>
                        <div>
                            {feat.advanced && (
                                <div className="p-2">
                                    <strong>Advanced:</strong> <DiceTextString>{feat.advanced.description}</DiceTextString>
                                </div>
                            )}
                        </div>
                        <div>
                            {feat.mastery && (
                                <div className="p-2">
                                    <strong>Mastery:</strong> <DiceTextString>{feat.mastery.description}</DiceTextString>
                                </div>
                            )}
                        </div>
                        <div>
                            {feat.subChoices && (
                                <div className="p-2">
                                    {   
                                        feat.id.includes("augment") && 
                                        <span>See Modular Augments details <Link to={`/wiki/${WikiArticleLinks.LEVELING_MODULAR_AUGMENTS}`}>here</Link></span>
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}