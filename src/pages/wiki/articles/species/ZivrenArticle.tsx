import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum"


export const ZivrenArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3><strong>Species Feat</strong></h3>
                <p>
                    <strong>Scurry:</strong> Gain a d6 bonus on defense checks when attacks are not in the same zone.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Description</strong></h3>
                <p>
                    The Zivren are short humanoids with weasel-like faces and tails.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>
                    The Zivren are believed to be among the first Successor Species to
                    become spacefaring, alongside 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_FEYRA}`}>Feyra</Link> and 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_VELKI}`}>Velki</Link>. By the time 
                    other species began reaching the stars, the Zivren were already everywhere, 
                    traveling in ships that seemed impossibly large for their small stature.
                </p>
                <p className="pt-2">
                    The Zivren have no idea when they first became spacefaring. They do
                    not even know which planet was their original homeworld, nor do they
                    seem particularly concerned about finding out.
                </p>
                <p className="pt-2">
                    Soon after the Star Alliance was formed, the Zivren happily joined.
                    In modern times, they have integrated themselves into most worlds and
                    societies throughout the galaxy.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>
                    Zivren attitudes vary greatly from person to person. They have a wide
                    range of personalities and beliefs, but most Zivren are strongly
                    family-oriented. They tend to form large, close-knit families and
                    place great importance on their relationships with one another.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Galactic Relations</strong></h3>
                <p>
                    The Zivren are everywhere, and nearly every species is accustomed to
                    having them around. Their presence throughout the galaxy has made them
                    a familiar part of everyday life in many different worlds and societies.
                </p>
            </div>
        </div>
    );
};