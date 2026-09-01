import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum"

export const EmpianArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3><strong>Species Feat</strong></h3>
                <p>
                    <strong>Modular Feat: Psionics:</strong> Empian possess innate psionic abilities. Also 
                    able to gain the Advanced version at level 3 and Mastery version at level 6.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Description</strong></h3>
                <p>
                    Humanoids with large, fuzzy ears, large eyes, and tails with fuzzy ends.
                    Unlike other species with scattered psychic abilities, every member of
                    the Empian people possesses some measure of psionic ability.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>
                    Thousands of years ago, when it took years to travel what now takes a
                    week, the Empian were at war with 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_DRKARI}`}>Drakari</Link> for 
                    hundreds of years. As fold travel became more efficient, both sides realized 
                    that the war would only become more and more catastrophic. With the help of 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_FEYRA}`}>Feyra</Link>, the war 
                    ended and the Star Alliance was formed.
                </p>
                <p className="pt-2">
                    The Empian became the head of most diplomacy and intelligence within the
                    Alliance. Their influence has spread throughout the Star Alliance, and
                    they continue to play a major role in its political and diplomatic affairs.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>
                    The Empian are soft-spoken and typically kind. Beneath their gentle
                    demeanor, however, they can be demanding and assertive when the
                    situation calls for it.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Galactic Relations</strong></h3>
                <p>
                    The Empian are one of the founders of the Star Alliance and one of the
                    three major players in its government, along with 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_DRKARI}`}>Drakari</Link> and 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_VELKI}`}>Velki</Link>, with 
                    whom they have a close relationship. They are widely seen as leaders within 
                    the Star Alliance and are highly respected by its members.
                </p>
                <p className="pt-2">
                    <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>Humans</Link> and 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_RHAZAK}`}>Rhazak</Link>, 
                    however, tend to view the Empian with suspicion because of their psionic abilities.
                </p>
            </div>
        </div>
    );
};