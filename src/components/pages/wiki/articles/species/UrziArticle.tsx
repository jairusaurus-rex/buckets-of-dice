import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../../data-types/enums/wiki-article-enum"
import DiceText from "../../../../commons/DiceText";

export const UrziArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3><strong>Species Feat</strong></h3>
                <p>
                    <strong>Thick Hide:</strong> Gain a <DiceText>6</DiceText> bonus on defense checks when all attacks
                    are in the same or adjacent zones.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Description</strong></h3>
                <p>
                    Large, bear-like humanoids with powerful builds and thick hides.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>
                    Thousands of years ago, the Urzi prided themselves on their military
                    strength. They eagerly waged war against the Star Alliance, confident
                    that their warriors would prove themselves the strongest in the galaxy.
                    Instead, the Urzi were defeated outright.
                </p>
                <p className="pt-2">
                    Seeing the strength of the Star Alliance, the Urzi eventually decided
                    to join it. Having failed to become the warrior species of the galaxy,
                    they shifted their society toward demonstrating their protective and
                    caring nature.
                </p>
                <p className="pt-2">
                    The Urzi took it upon themselves to become the charity arm of the Star
                    Alliance. They care for the poor and vulnerable and operate teams of
                    soldiers dedicated to protecting the innocent. One of their greatest
                    acts of charity was taking in 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_BEK}`}>Bek</Link> after they 
                    lost their homes and providing them with a place to live on Urzi worlds.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>
                    For large, carnivorous-looking humanoids, the Urzi are surprisingly
                    friendly and cheerful. They are generally warm and welcoming, but can
                    become vicious in an instant when protecting those they care about.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Galactic Relations</strong></h3>
                <p>
                    Most other species respect the Urzi for their good nature and dedication
                    to protecting those in need. 
                    The <Link to={`/wiki/${WikiArticleLinks.SPECIES_BEK}`}>Bek</Link> owe the Urzi a 
                    great debt for saving their people, while the <Link to={`/wiki/${WikiArticleLinks.SPECIES_CHYRAX}`}>Chyrax</Link> resent the Urzi for their relationship
                    with the <Link to={`/wiki/${WikiArticleLinks.SPECIES_BEK}`}>Bek</Link>.
                </p>
                <p className="pt-2">
                    The Urzi also hold 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_DRKARI}`}>Drakari</Link> in 
                    great respect. Despite their defeat at the hands of 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_DRKARI}`}>Drakari</Link> so 
                    many eras ago, the Urzi view that defeat as a testament to 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_DRKARI}`}>Drakari</Link>'s 
                    strength.
                </p>
            </div>
        </div>
    );
};