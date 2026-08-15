import { Link } from "react-router-dom"
import { WikiArticleLinks } from "../../../../commons/enums/wiki-article-enum"

export const FeyraArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3><strong>Species Feat</strong></h3>
                <p>
                    <strong>Long Lived:</strong> Gain a d8 benefit when using your age to influence people and when using the Navigation post.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Description</strong></h3>
                <p>
                    Humanoids with goat-like horns and ears. The Feyra live unbelievably long lives,
                    often surviving for several lifetimes of other species.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>History</strong></h3>
                <p>
                    The Feyra are believed to be among the first of the Successor Species to
                    become spacefaring, alongside the Velki and the Zivren. As other species
                    began to reach the stars, the Feyra kept a comfortable distance from them,
                    preferring to observe rather than become directly involved.
                </p>
                <p className="pt-2">
                    Thousands of years ago, the Feyra finally intervened to end the war between
                    the Velki and the Empian. The three species became the founding members of
                    the Star Alliance. Soon after, however, the Feyra stepped back from the
                    Alliance and became much less involved in its decision-making.
                </p>
                <p className="pt-2">
                    By their own choice, the Feyra became a lesser member of the Alliance.
                    Though they remain a part of it, they generally avoid direct involvement,
                    offering their advice when it is needed.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Typical Temperament</strong></h3>
                <p>
                    The Feyra are very secluded, often living by themselves or in very small
                    groups. Some may spend several lifetimes without forming a close connection
                    with another person. They are friendly but slow to form genuine bonds.
                    Once such a bond is made, however, it can last for a lifetime—or even
                    several lifetimes.
                </p>
            </div>

            <div className="p-2">
                <h3><strong>Galactic Relations</strong></h3>
                <p>
                    Many respect the Feyra for their ageless wisdom and the knowledge they have
                    accumulated over countless generations. Others are suspicious of their
                    aloof nature and question what the Feyra know but choose not to share.
                </p>
            </div>
        </div>
    );
};