import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../commons/enums/wiki-article-enum"

export const DroidsArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3>Species Feat</h3>
                <p>
                    <strong>Modular Feat: Cybernetics:</strong> Droids can gain cybernetic enhancements as part of their modular construction.
                </p>
            </div>

            <div className="p-2">
                <h3>Description</h3>
                <p>
                    Droids vary widely in appearance and construction. They can range from
                    simple mechanical workers to highly advanced humanoid machines designed
                    to closely resemble other species.
                </p>
            </div>

            <div className="p-2">
                <h3>History</h3>
                <p>
                    Droids have been a staple of galactic civilization for as long as most
                    species can remember, dating back to the earliest Successor Species
                    traveling among the stars. A common practice was to bind an AI to a
                    specific robotic body, ensuring that it could not be easily corrupted
                    or hacked. This body became a sort of droid soul, tying the droid's
                    identity to its physical form much like the bodies of other species.
                </p>
                <p className="pt-2">
                    Droids possess varying degrees of sentience and sapience. Because they
                    differ so greatly in their construction, intelligence, and behavior,
                    there is considerable debate over whether they should be considered a
                    single species at all. Droids have some recognition within the Star
                    Alliance, but they have very little recognition or protection within
                    human territory.
                </p>
            </div>

            <div className="p-2">
                <h3>Typical Temperament</h3>
                <p>
                    Droids vary widely in temperament. Some are every bit as sentient and
                    sapient as other species, possessing hopes, dreams, and ambitions for
                    the future. Others function primarily as tools or machines carrying out
                    their assigned tasks. Most droids fall somewhere between these extremes,
                    developing personalities and individual identities while still being
                    shaped by their original programming and purpose.
                </p>
            </div>

            <div className="p-2">
                <h3>Galactic Relations</h3>
                <p>
                    Attitudes toward droids vary greatly across the galaxy. Most people
                    continue to treat them as tools rather than as people, regardless of
                    their level of sentience. The Flona have a particular disdain for droids,
                    while the Rhazak consider the use of droids to be a sign of weakness.
                    Within the Star Alliance, droids have gained some recognition, though
                    their status and rights remain inconsistent across its member species.
                </p>
            </div>
        </div>
    );
};