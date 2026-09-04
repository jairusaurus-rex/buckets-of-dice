import { useState } from "react";
import { SuitAccent } from "../../../../../assets/data/SuitAccent";


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
            <p className="p-2">Players choose one accent to give them their own unique style and advantages. Each player can choose one from the accent list.</p>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 border-t border-[var(--border)] pt-4">
                <h3 className="font-bold">Star Suit Accents</h3>
                <input
                    type="search"
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                    placeholder="Search accents..."
                    aria-label="Search star suit accents"
                    className="w-full md:w-3/4 rounded border border-[var(--border)] bg-[var(--bg)] p-2 text-[var(--text-h)]"
                />
                
            </div>
            <div className="columns-1 md:columns-2 gap-8">
                {accentData.map((accent) => (
                    <div key={accent.id} className="mt-2 p-2  break-inside-avoid">
                        <div className="font-bold">
                            {accent.name}
                        </div>

                        <div>
                            {accent.description}
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    )
}