import { useState } from "react";
import { GearData } from "../../../../../assets/data/GearData";


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
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 border-t border-[var(--border)] pt-4">
                <h3 className="font-bold">Gear List</h3>
                <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search gear..."
                    aria-label="Search non-suit gear"
                    className="w-full md:w-3/4 rounded border border-[var(--border)] bg-[var(--bg)] p-2 text-[var(--text-h)]"
                />

            </div>

            <div className="columns-1 md:columns-2 gap-8">
                {gearData.map((gear) => (
                    <div key={gear.id} className="mt-2 p-2  break-inside-avoid">
                        <div className="font-bold">
                            {gear.name}
                        </div>

                        <div>
                            {gear.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}