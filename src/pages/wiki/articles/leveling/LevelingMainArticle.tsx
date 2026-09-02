import DiceText from "../../../../components/commons/DiceText"

export const LevelingArticle = () => {

    return (
        <div className="p-2 text-justify">
            <div className="p-2">
                <h3 className="font-bold">Character Creation</h3>
                <p className="p-2">When creating a new character, start at level 0 and level up
                    until you reach the desired level.</p>
            </div>
            <div className="p-2">
                <h3 className="font-bold">Exp & Leveling UP</h3>
                <p className="p-2">After every session, add one exp point to their exp list. If
                    sessions are longer than 4 hours, you can break the session points up into
                    breaks, giving out more session points</p>
                <p className="p-2">You can spend your exp points to level up. To spend an exp
                    point, remove it from your exp list. The cost to level up is equal to your
                    current level. So to level up from level one to level 2 is 1 exp point
                    while leveling up from level 5 to 6 is 5 exp points</p>
                <p className="p-2">When you level up your character, do the following:</p>
                <ul className="list-decimal list-inside pl-4 space-y-2">
                    <li>Increase Hit Point Max</li>
                    <li>Improve a skills</li>
                    <li>Gain a new feat</li>
                </ul>
            </div>
            <div className="p-2">
                <h3 className="font-bold">Increase Hit Points</h3>
                <p className="p-2">Hit point max for stamina and grit go up by 1 for every
                    level. Since the Wound max is half the level rounded up, it goes up by 1
                    every odd level.</p>
            </div>
            <div className="p-2">
                <h3 className="font-bold">Improve Skills</h3>
                <p className="p-2">Choose any skill and increase that skill by 2. Each skill
                    cannot go above <DiceText>12</DiceText>.</p>
            </div>
            <div className="p-2">
                <h3 className="font-bold">Gain a new feat</h3>
                <p className="p-2">Choose from the list of feats and add it to your feat list. </p>
                <p className="p-2">Starting at level 4, instead of gaining a new feat, you can
                    choose to instead add an Advanced form of a feat you already have.</p>
                <p className="p-2">Starting at level 8, instead of gaining a new feat, you can
                    choose to instead add an Mastery form of a feat you already have an
                    Advanced form in.</p>
                <p className="p-2">At level 10, choose to gain 2 feats instead of 1. You can
                    use these to gain a Advanced or Masteries</p>
            </div>
        </div>
    )
}