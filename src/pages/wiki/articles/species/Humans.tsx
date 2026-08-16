import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../commons/enums/wiki-article-enum"

export const HumansArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3><strong>Species Feat</strong></h3>
                <p>
                    <strong>Skilled:</strong> Improve two skills that are at d4 and one skill that is at d6.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>
                    A little under a thousand years ago, Humanity became a starfaring
                    species. Humanity was deeply divided and had fought many wars, leaving
                    Earth a radioactive and unlivable planet. Forced to spread out into the
                    cosmos, humanity began establishing colonies among the stars.
                </p>
                <p className="pt-2">
                    Humanity formed friendships with the Lycanus and eventually joined the
                    Star Alliance. As the new species on the block, however, humanity
                    struggled under the stringent bureaucracy of the Alliance. The Alliance
                    saw humanity as a species that wanted to grow too much and too quickly.
                    Some human nations broke away and began settling outside of Star Alliance
                    territory. Humanity soon gained a reputation as a rebellious nuisance.
                </p>
                <p className="pt-2">
                    Around 300 years ago, the Star Alliance was invaded by a swarm species
                    during what became known as the Swarm Calamity. The Alliance was
                    overwhelmed, and its rigid bureaucracy proved too slow to respond to the
                    invasion. Its territories quickly diminished.
                </p>
                <p className="pt-2">
                    A human who called himself Aries Crescent won several major victories
                    against the swarm using human fleets. After gaining fame, he re-terraformed
                    Earth, united most of humanity, and ultimately defeated the swarm. He
                    formed the United Earth Empire, or UEE, with himself as its first Emperor.
                </p>
                <p className="pt-2">
                    Today, the UEE is larger than the Star Alliance. Some humans still live
                    within the Star Alliance, as humanity remains an official member.
                    Other human territories that chose to join neither the Alliance nor the
                    Empire formed their own territory, known as the Triskelion Accord.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>
                    Humanity is difficult to characterize as a whole. Humans are ambitious,
                    adaptable, and driven to improve their circumstances. Their willingness
                    to expand and rapidly embrace new ideas has allowed them to spread across
                    the galaxy, but it has also made them difficult for other species to
                    predict and control.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Galactic Relations</strong></h3>
                <p>
                    Though humanity is at peace with the Star Alliance, most Alliance members
                    view humanity as a problem. Some see the United Earth Empire as a potential
                    threat, while others believe humanity has simply spread too far and too
                    quickly. Still, openly antagonizing humanity is generally considered a
                    mistake.
                </p>
                <p className="pt-2">
                    The <Link to={`/wiki/${WikiArticleLinks.SPECIES_LOCANUS}`}>Locanus</Link>, however, 
                    have always regarded humanity as a friend and ally.
                </p>
            </div>
        </div>
    );
};