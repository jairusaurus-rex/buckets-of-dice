import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum"
import DiceText from "../../../../components/commons/DiceText"

export const DrakariArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3>Species Feat</h3>
                <p><strong>Claws and Teeth:</strong> Gain a <DiceText>6</DiceText> bonus on attacks on targets in the 
                same zone</p>
            </div>
            <div className="p-2">
                <h3><strong>Description</strong></h3>
                <p>Reptilian Theropod, scaled skin, long tail. Clawed hands and feet. sharp 
                    teeth</p>
            </div>
            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>Thousands of years ago, when it took years to travel what now takes a week, the 
                    Drakari were at war with 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_EMPIANS}`}>Empian</Link> for 
                    hundreds of years. As fold travel became more efficient, both sides realized 
                    that the war would only become more and more catastrophic. With the help of 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_FEYRA}`}>Feyra</Link>, the war 
                    ended and the Star Alliance was formed. </p>
                <p className="pt-2">The Drakari became the majority of the military of the Star 
                    Alliance as well as one of the major three factions within its community and 
                    government.</p>
            </div>
            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>The Drakari are proud warrior. They are highly organized and militarized. They 
                    can seem harsh. They respect merit and honor.  </p>
            </div>
            <div className="p-2">
                <h3><strong>Galactic relations</strong></h3>
                <p>The Drakari are one of the founders of the Star Alliance as well as one of the 
three major players in the Star Alliance government, along with 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_EMPIANS}`}>Empian</Link> and 
                    the <Link to={`/wiki/${WikiArticleLinks.SPECIES_VELKI}`}>Velki</Link>, with 
                    whom they have a close relationship with. Many others fear or respect their 
                    military might. That large, the Drakari have a rivally 
                    with <Link to={`/wiki/${WikiArticleLinks.SPECIES_HUMANS}`}>Humans</Link> who 
                    have outdone their military in recent history.</p>
            </div>
        </div>
    )
}