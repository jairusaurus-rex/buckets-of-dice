import { Link } from "react-router-dom";
import { GearData } from "../../../../assets/data/GearData";
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum";


export const SuitGearArticle = () => {
    const suitAccessData = GearData.filter((gear) => gear.isSuit === true).sort((a, b) => a.name.localeCompare(b.name));
    return (
        <div className="p-2 text-justify">
            <p className="p-2">Everyone travelling in the heavens wears a Star Suit. The Star Suit is a thin space sealed
                suit that allows for protection for the vacuum of space, elements of strange planets, and the dangers of
                battle while providing as much comfort as possible. They usually come with a collapsible helmet, showing as
                much of their face as they wish while being able to close instantly. </p>
            <p className="p-2">Star Suits have armor for combat, have the ability to deal with the elements and have
                medical emergency injections to deal with injury.</p>
            <p className="p-2">They are also slim enough so other clothing can be more over them, capes, coats, dresses and
                other stylish clothing. These are called accents</p>
            <p className="p-2">Star Suits have parts which take up four gears of a character sheet. This gives all players
                armor, adept, and aid along with an accent to make them more unique.</p>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mt-4 border-t border-[var(--border)] pt-4">
                <h3 className="font-bold">Star Suit Gear</h3>
            </div>

            <div className="columns-1 md:columns-2 gap-8">
                {suitAccessData.map((gear) => (
                    <div key={gear.id} className="mt-2 p-2  break-inside-avoid">
                        <div className="font-bold">
                            {gear.name}
                        </div>

                        <div>
                            {gear.description}
                        </div>
                        {gear.name.toLowerCase().includes("accent") && <div className="mt-2">See accent options <Link to={`/wiki/${WikiArticleLinks.GEAR_SUIT_ACCENT}`}>here</Link></div>}
                    </div>
                ))}
            </div>
        </div>
    )
}