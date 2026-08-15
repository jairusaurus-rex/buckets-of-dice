import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../commons/enums/wiki-article-enum"

export const LocanusArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3><strong>Species Feat</strong></h3>
                <p>
                    <strong>Keen Sight:</strong> Gain a d6 bonus on attacks against targets that 
                    are not in the same zone or an adjacent zone.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Description</strong></h3>
                <p>
                    Locanus are humanoids with insect-like features. They typically live
                    in small communities or among humans.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>
                    The Locanus became a spacefaring species sometime after humanity. They
                    settled on the other side of human territory, far from the Star Alliance.
                    Humans were the first sapient species the Locanus encountered.
                </p>
                <p className="pt-2">
                    The Locanus quickly became close allies of humanity. They remain one of
                    the few known species that maintain a close relationship with humans
                    without being members of the Star Alliance.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>
                    Modern comforts frustrate most Locanus. They seek adventure, excitement,
                    and combat, and can be quick to anger or resort to violence. Despite
                    their aggressive nature, Locanus are extremely loyal to their friends
                    and will go to great lengths to protect those they care about.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Galactic Relations</strong></h3>
                <p>
                    Most Locanus are fond of humans and consider them close friends. Human
                    society and its problems give many Locanus a sense of purpose, providing
                    them with opportunities for adventure, conflict, and companionship.
                </p>
                <p className="pt-2">
                    The Locanus have had little contact with most other Successor Species
                    and are largely unfamiliar with the wider galactic community beyond
                    human territory.
                </p>
            </div>
        </div>
    );
};