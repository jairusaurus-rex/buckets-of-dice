import { GearData } from "../../../../../assets/data/GearData";
import { useState } from "react";
import { ListLayout } from "../../../../commons/ListLayout";


export const NonSuitGearArticle = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const gearData = GearData
        .filter((gear) => gear.isSuit === false)
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
            <p className="p-2">When first making a character, you may choose 6 Non-Suit Gear items. </p>
            <p className="p-2">Unless a feat or ability says otherwise, you can only have one of each of the below.
                This applies whether you are selecting starting gear or buying additional gear. </p>

            <ListLayout
                title="Subchoice List"
                showSearch
                searchValue={searchTerm}
                searchPlaceholder="Search gear..."
                onSearchChange={setSearchTerm}
                items={gearData}
                getKey={(gear) => gear.id}
                renderItem={(gear) => (
                    <>
                        <div className="font-bold">
                            {gear.name}
                        </div>
                        <div>
                            {gear.description}
                        </div>
                    </>
                )}
            />
        </div>
    )
}