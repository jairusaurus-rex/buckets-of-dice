import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum"
export const BekArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3>Species Feat</h3>
                <p><strong>Leather Wings:</strong> Have the flight ability</p>
            </div>
            <div className="p-2">
                <h3><strong>Description</strong></h3>
                <p>Humanoid beings with sharp ears and horns. They have leather wings that can wrap 
                    around them to resemble capes or unfold to give them the ability to fly</p>
            </div>
            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>The Bek are a later addition to the Successor Species. Early in the space 
                    fairing history, (say 500 ish years ago) they got into a heated war with 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_CHYRAX}`}>Chyrax</Link>, known 
                    as the scorch war. While the Star Alliance stood, the two destroyed each others 
                    home world and major colonies. </p>

                <p className="pt-2">After the war, the Bek sought refuge from members of the Star 
                    Alliance. They became refugies and were settled on world's hosted by other 
                    species. The <Link to={`/wiki/${WikiArticleLinks.SPECIES_URZI}`}>Urzi</Link> is their primary benefactor as they opened the doors to the 
                    Bek. The Bek became a member of the Star Alliance soon after the war</p>
            </div>
            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>The Bek are a shadow for their former selves, the once proud warrior people have 
                    survived off the charity of others. Their communities are typically meek, 
                    wanting to continue to live off the good nature of the Star Alliance. </p>
            </div>
            <div className="p-2">
                <h3><strong>Galactic relations</strong></h3>
                <p>Most the Bek can be found in the Star Alliance. the have a positive relationship 
                    with the <Link to={`/wiki/${WikiArticleLinks.SPECIES_URZI}`}>Urzi</Link> who is their older sibling species and major caretaker. There is 
                    still tension with 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_CHYRAX}`}>Chyrax</Link></p>
            </div>
        </div>
    )
}