import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../commons/enums/wiki-article-enum"

export const PawniansArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3><strong>Species Feat</strong></h3>
                <p>
                    <strong>Adaptable:</strong> Pick any non-modular feat.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Description</strong></h3>
                <p>
                    Pawnians are humanoids with more ape-like features than humans,
                    including a monkey-like tail. They have grey skin and hair.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>
                    Pawnians are the newest of the Successor Species known by the Star
                    Alliance and human territories. They have been known by the other
                    species for less than a hundred years.
                </p>
                <p className="pt-2">
                    Recently, the Pawnians managed to become members of the Star Alliance.
                    Their technology is still behind that of most other species, and they
                    are working hard to prove themselves to the wider galactic community.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>
                    Pawnians often feel that they have something to prove. They are quick
                    to find ways of making themselves useful and are eager to demonstrate
                    their skills and value to others.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Galactic Relations</strong></h3>
                <p>
                    Most species know very little about the Pawnians. Some have only heard
                    of them in passing, while others have never heard of them at all. As
                    Pawnians become more established within the Star Alliance, they are
                    slowly becoming better known throughout the galaxy.
                </p>
            </div>
        </div>
    );
};