import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../commons/enums/wiki-article-enum"

export const ChyraxArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3>Species Feat</h3>
                <p><strong>Camo Scales:</strong> Gain a d8 bonus on all stealth checks</p>
            </div>
            <div className="p-2">
                <h3><strong>Description</strong></h3>
                <p>Reptilian Humanoid beings. Scale skin, black eyes, some have small frills where hair would be. Their scales can change color, blending into whatever background they are in.</p>
            </div>
            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>The Chyrax are a later addition to the Successor Species. Early in the space fairing history, (say 500 ish years ago) they got into a heated war with the <Link to={`/wiki/${WikiArticleLinks.SPECIES_BEK}`}>Bek</Link>     , known as the scorch war. While the Star Alliance stood, the two destroyed each others home world and major colonies. </p>
                <p className="pt-2">After the war, the Chyrax turned down any charity offered to them. They saw the Star Alliance as just as responsible for the destruction of their worlds. They instead banded together in traveling spaceship caravans. Eventually, to gain the benefits of the galactic community, they reluctantly joined the Star Alliance.</p>
                <p className="pt-2">Today, some of their caravans still exist, but they mostly live in new colonies or even among other species</p>
            </div>
            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>The Chyrax can be cold and detached, not making bonds with others outside of their small tribe or community. They are seen as typically reserved, and often holding a grudge. </p>
            </div>
            <div className="p-2">
                <h3><strong>Galactic relations</strong></h3>
                <p>Most the Chyrax can be found in the Star Alliance. They have a shaky relationship with most species and still hold a grudge with the <Link to={`/wiki/${WikiArticleLinks.SPECIES_BEK}`}>Bek</Link>, who they see as people who destroyed them but also haven't suffered as much as them over the years.</p>
            </div>
        </div>
    )
}