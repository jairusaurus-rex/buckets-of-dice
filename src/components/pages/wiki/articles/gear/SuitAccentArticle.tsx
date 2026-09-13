import { SuitAccent } from "../../../../../assets/data/SuitAccent";
import { useState } from "react";
import { ListLayout } from "../../../../commons/ListLayout";


export const SuitAccentArticle = () => {
    const [searchTerm, setSearchTerm] = useState("");

    const accentData = SuitAccent
        .filter((gear) => {
            const search = searchTerm.toLowerCase();

            return (
                gear.name.toLowerCase().includes(search) ||
                gear.description.toLowerCase().includes(search)
            );
        })
        .sort((a, b) => a.name.localeCompare(b.name));
    return (
        <div className="p-2 text-justify">
            <p className="p-2">Each Suit is slim enough so other clothing can be more over them, capes, coats, dresses and
                other stylish clothing. These are called accents</p>
            <p className="p-2">Players choose one accent to give them their own unique style and advantages. Each player can choose one from the accent list.</p>

            <ListLayout
                title="Subchoice List"
                showSearch
                searchValue={searchTerm}
                searchPlaceholder="Search gear..."
                onSearchChange={setSearchTerm}
                items={accentData}
                getKey={(accent) => accent.id}
                renderItem={(accent) => (
                    <>
                        <div className="font-bold">
                            {accent.name}
                        </div>
                        <div>
                            {accent.description}
                        </div>
                    </>
                )}
            />

        </div>
    )
}