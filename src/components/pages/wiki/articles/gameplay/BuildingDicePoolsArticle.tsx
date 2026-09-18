import { Link } from "react-router-dom";
import { DiceText } from "../../../../commons/DiceText";
import { WikiArticleLinks } from "../../../../../data-types/enums/wiki-article-enum";

export const BuildingDicePoolsArticle = () => {
    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3 className="font-bold">Building a Dice Pool</h3>
                <p className="p-2">
                    A dice check uses a pool made from the skills, gear, reputation,
                    feats, and assets that apply to the situation. Add the dice below
                    before rolling the pool. Each source gives dice a rank, such as a
                    6, which means that die is a <DiceText>6</DiceText>. The rank is
                    the number of sides on the die, not the number of dice in the pool.
                </p>
            </div>

            <div className="p-2 border-t border-[var(--border)]">
                <h3 className="font-bold">1. Add a Skill Die</h3>
                <p className="p-2">
                    Every dice pool starts with at least one skill die. A feat or
                    another rule may change how many skill dice a character gets or the
                    rank of those dice.
                </p>
                <p className="p-2">
                    The Game Master (GM) may decide which skill applies, or the rules
                    may state which skill to use. Sometimes the GM gives the player a
                    choice from a short list of skills. When more than one skill makes
                    sense and no narrower choice is given, the player may argue for a
                    skill and the GM decides whether it fits.
                </p>
                <p className="p-2">
                    You can find the list of skills <Link to={`/wiki/${WikiArticleLinks.SKILLS}`}>here</Link>
                </p>
            </div>

            <div className="p-2 border-t border-[var(--border)]">
                <h3 className="font-bold">2. Add Gear and Reputation Dice</h3>
                <p className="p-2">
                    Add one gear die and one reputation die to the pool that apply. 
                    Not all dice pools will have a gear or reputation dice. The gear and
                    reputation each have a rank that determines the type of die, such
                    as a 4 for a <DiceText>4</DiceText> or a 8 for
                    a <DiceText>8</DiceText>. A feat or another rule may change or remove either of these
                    dice.
                </p>
                <p className="p-2">    
                    Find out more about Gear <Link to={`/wiki/${WikiArticleLinks.GEAR}`}>here</Link>
                </p>
            </div>

            <div className="p-2 border-t border-[var(--border)]">
                <h3 className="font-bold">3. Add Feat Dice</h3>
                <p className="p-2">
                    Add any additional dice granted by the character&apos;s feats, using
                    the rank stated by each feat. Read each feat carefully, since it
                    may add dice, change a normal die, or apply only in a specific
                    situation.
                </p>
            </div>

            <div className="p-2 border-t border-[var(--border)]">
                <h3 className="font-bold">4. Add Assets</h3>
                <p className="p-2">
                    Add as many dice as the assets that apply to the situation provide,
                    using the rank stated by each asset. An asset should help with the
                    check in a meaningful way before it contributes a die to the pool.
                </p>
            </div>

            <div className="p-2 border-t border-[var(--border)]">
                <h3 className="font-bold">Example Pool</h3>
                <p className="p-2">
                    A character begins with one skill die, one gear die, and one
                    reputation die. A feat adds one more die, and two applicable assets
                    add two more. The final pool contains five dice: a skill die, a
                    gear die, a reputation die, a feat die, and two asset dice.
                </p>
                <p className="p-2">
                    The actual die ranks depend on the character and the rules involved.
                    For example, the pool might contain a skill 6 
                    (<DiceText>6</DiceText>), a gear 8 (<DiceText>8</DiceText> ), a reputation
                    4 (<DiceText>4</DiceText>), and ranks specified by the feat and
                    assets. Roll each die according to its own rank.
                </p>
            </div>
        </div>
    );
};