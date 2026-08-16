import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../commons/enums/wiki-article-enum"
export const VrantsArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3><strong>Species Feat</strong></h3>
                <p>
                    <strong>Modular Feat: Modified</strong>
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Description</strong></h3>
                <p>
                    <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>Humans</Link> with 
                    vivid, brightly colored irises and fully black sclera. Their eyes have no 
                    visible white, giving them a distinctive appearance compared to 
                    other <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>humans</Link>.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>
                    Early in <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>humanity's</Link> spacefaring 
                    history, many wars broke out between 
                    different <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>human</Link> nations. 
                    One nation attempted to genetically alter its
                    people to become a post-human species. Rather than 
                    surpassing <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>humanity</Link>, however, 
                    they lost war after war against the 
                    other <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>human</Link> nations.
                </p>
                <p className="pt-2">
                    After losing their territories, they broke into bands of traveling
                    caravans. They gained a reputation as untrustworthy vagabonds and were
                    referred to by names such as variant humans, vagrants, and rats.
                    Eventually, they became most commonly known as the Vrants.
                </p>
                <p className="pt-2">
                    After the formation of the United Earth Empire, the Vrants were welcomed
                    back into the Empire as part of its effort to unify all Earthlings.
                    Some Vrants joined the Empire and settled 
                    into <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>human</Link> society, 
                    while others chose to maintain their traditional wandering lifestyle.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>
                    Vrants tend to be adaptable and independent, shaped by generations of
                    traveling and surviving outside established societies. Many value their
                    freedom and are reluctant to place themselves under the authority of
                    others.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Galactic Relations</strong></h3>
                <p>
                    More and 
                    more <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>humans</Link> have 
                    come to trust the Vrants, though they remain mistrusted by many. Their history 
                    as wandering outsiders continues to influence how they are treated 
                    within <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>human</Link> society.
                </p>
                <p className="pt-2">
                    Most other Successor Species cannot easily distinguish Vrants from
                    ordinary <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>humans</Link> and 
                    generally treat them as such.
                </p>
            </div>
        </div>
    );
};