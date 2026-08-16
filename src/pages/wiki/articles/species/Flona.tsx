import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../commons/enums/wiki-article-enum"

export const FlonaArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3><strong>Species Feat</strong></h3>
                <p>
                    <strong>Regeneration:</strong> Gain a d10 bonus whenever healing your own Grit.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Description</strong></h3>
                <p>
                    Plant-based humanoids with either vine-like or bark-like skin, with
                    flower petals where hair would normally be. The Flona possess a unique
                    life cycle. When they die, their bodies can grow into enormous trees if
                    they are buried on a planet with the right conditions. New Flona are
                    then born from the flowers of these trees.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>
                    The Flona were discovered during the early days of the Star Alliance.
                    Seen as beautiful, strong, friendly, and useful, the Star Alliance
                    aided them in becoming a spacefaring species.
                </p>
                <p className="pt-2">
                    Conflict soon arose when the Flona's life cycle began producing giant
                    trees in locations where the other members of the Alliance did not want
                    them. What the Flona saw as a natural and sacred part of their life
                    cycle, others saw as a growing problem.
                </p>
                <p className="pt-2">
                    In modern times, Flona settlements are regulated by both the Star Alliance 
                    and <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>human</Link> nations, 
                    much to the disagreement of the Flona.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>
                    The Flona are generally gentle and kind unless provoked. Their unique
                    life cycle has also given them a fearless attitude toward battle.
                    Because they can regenerate and their death can lead to new life, they
                    often have little fear of risking themselves in combat.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Galactic Relations</strong></h3>
                <p>
                    Flona are generally well-liked and appreciated as individuals. However,
                    many species are uncomfortable sharing entire worlds with large Flona
                    populations because of their unique life cycle and the enormous trees
                    that can result from it.
                </p>
            </div>
        </div>
    );
};