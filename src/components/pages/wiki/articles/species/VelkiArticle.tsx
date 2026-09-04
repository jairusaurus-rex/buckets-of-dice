import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../../data-types/enums/wiki-article-enum"

export const VelkiArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3><strong>Species Feat</strong></h3>
                <p>
                    <strong>Nimble Footed:</strong> Gain one free movement per turn.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Description</strong></h3>
                <p>
                    Humanoids with exoskeletal faces, antlers, and deer-like feet.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>
                    The Velki tie moral value closely to honest economics. They built a
                    prosperous and stable society and became one of the first spacefaring
                    peoples among the Successor Species. Though 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_ZIVREN}`}>Zivren</Link> and <Link to={`/wiki/${WikiArticleLinks.SPECIES_FEYRA}`}>Feyra</Link> are
                    also possible candidates for being the first, the Velki firmly believe
                    that they were the first to reach the stars.
                </p>
                <p className="pt-2">
                    When the Star Alliance was formed, the Velki saw an opportunity to
                    expand their society and influence. Outside of the three founding
                    species, they were the first to join the Alliance.
                </p>
                <p className="pt-2">
                    The Velki were instrumental in creating an economic system, currency, and 
                    banking system capable of supporting trade between multiple species. Many of 
                    the systems they developed are still used today throughout both the Star Alliance 
                    and <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>human</Link> territories.
                </p>
                <p className="pt-2">
                    The Velki eventually became one of the major species within the Star Alliance 
                    government, alongside 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_DRKARI}`}>Drakari</Link> and <Link to={`/wiki/${WikiArticleLinks.SPECIES_EMPIANS}`}>Empian</Link>.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>
                    The Velki are very prideful, but not without cause. They take great
                    pride in their accomplishments, their society, and their reputation
                    for honesty and fair dealing.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Galactic Relations</strong></h3>
                <p>
                    Some find the Velki's pride annoying, while others see them as
                    intelligent and wise. Their skill in salesmanship is well-known
                    throughout the galaxy, and their reputation for honest business means
                    that dealing with a Velki usually comes with the confidence that you
                    received a fair deal.
                </p>
            </div>
        </div>
    );
};