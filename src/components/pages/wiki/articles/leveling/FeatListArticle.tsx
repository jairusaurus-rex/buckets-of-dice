import { DiceTextString } from "../../../../commons/DiceTextString";
import { FeatData } from "../../../../../assets/data/FeatData";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ListLayout } from "../../../../commons/ListLayout";


export const FeatListArticle = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const featData = FeatData
        .filter((feat) => feat.species == null)
        .filter((feat) => {
            const search = searchTerm.toLowerCase();

            return (
                feat.name.toLowerCase().includes(search) ||
                feat.description.toLowerCase().includes(search) ||
                feat.tags?.some(tag => tag.toLowerCase().includes(search))
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

            <ListLayout
                title="Feat List"
                showSearch
                searchValue={searchTerm}
                searchPlaceholder="Search feats..."
                onSearchChange={setSearchTerm}
                items={featData}
                getKey={(feat) => feat.id}
                renderItem={(feat) => (
                    <div className="border-t border-[var(--border)] pt-2">
                        <div className="font-bold ">
                            <h4>{feat.name}</h4>
                        </div>

                        <div>
                            <strong>Description:</strong>{" "}
                            <DiceTextString>{feat.description}</DiceTextString>
                        </div>

                        {feat.advanced && (
                            <div className="p-2">
                                <strong>Advanced:</strong>{" "}
                                <DiceTextString>{feat.advanced.description}</DiceTextString>
                            </div>
                        )}

                        {feat.mastery && (
                            <div className="p-2">
                                <strong>Mastery:</strong>{" "}
                                <DiceTextString>{feat.mastery.description}</DiceTextString>
                            </div>
                        )}

                        {feat.link && (
                            <div className="p-2">
                                <span>
                                    See {feat.name} details <Link to={feat.link}>here</Link>
                                </span>
                            </div>
                        )}

                        <div className="m-0 p-3 text-[var(--tags)] text-xs text-right">
                            {feat.tags?.join(" - ")}
                        </div>
                    </div>
                )}
            />
            
        </div>
    )
}