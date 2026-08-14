import { Link } from "react-router-dom";
import { WikiArticleLinks } from "../../../commons/enums/wiki-article-enum";

export const CharacterCreationArticle = () => {
  return (
    <div className="p-2">
      <p className="p-1">There are Six steps to creating a character in Into the Heavens.</p>
      <ol className="list-decimal list-inside pl-4 space-y-2">
        <li>Set Starting Level</li>
        <li>Set Stats</li>
        <li>Set Starting Skills</li>
        <li>Choose Species</li>
        <li>Setup Gear</li>
        <li>Level Up Character from level 0 to starting level</li>
      </ol>
      <hr/>
      <h2 className="p-2">Step by step</h2>
      <ol className="list-decimal list-inside pl-4 space-y-2">
        <li className="text-lg font-bold">Set Starting Level
          <p className="text-sm p-2">For campaigns that are starting, the GM sets the starting level</p>
          <p className="text-sm p-2">For a new character joining an ongoing gain, the starting level is either the average level of the current group (rounded up) or the lowest level in the current group, whichever is lower</p>
        </li>
        <li className="text-lg font-bold">Set Stats
          <p className="text-sm p-2">Starting Stamina and Grit are at max, credits is equal to 25k times starting level</p>
        </li>
        <li className="text-lg font-bold">Set Start Skills
          <p className="text-sm p-2">Choose 6 skills to start at d6, the rest start at d4. See Skill list <Link to={`/wiki/${WikiArticleLinks.SKILLS}`}>here</Link></p>
        </li>
        <li className="text-lg font-bold">Choose Species
          <p className="text-sm p-2">Choose a species for your characte. See Species list <Link to={`/wiki/${WikiArticleLinks.SPECIES}`}>here</Link></p>
        </li>
        <li className="text-lg font-bold">Setup Gear
          <p className="text-sm p-2">You cannot have more than one of any gear.</p>
          <p className="text-sm p-2">Choose 1 Accent for your Star Suit. See list of Suit Gear <Link to={`/wiki/${WikiArticleLinks.GEAR_SUIT}`}>here</Link></p>
          <p className="text-sm p-2">Choose 6 nonsuit gear. See list of Non-Suit Gear <Link to={`/wiki/${WikiArticleLinks.GEAR_NON_SUIT}`}>here</Link></p>
          <p className="text-sm p-2">Set a number of gear to d6 equal to half your starting level rounded up, the rest are set as d4.</p>
          <p className="text-sm p-2">You can spend credits to upgrade/buy gear as though you are on a tech 10 planet. You must have 26k Credits left over.</p>
        </li>
        <li className="text-lg font-bold">Level Up Character
          <p className="text-sm p-2">Using the method in the next chapter, level up your character until you reach your starting level. Make sure to level up from the very first level (level 0 to level 1). See page of Leveling <Link to={`/wiki/${WikiArticleLinks.LEVELING}`}>here</Link>  </p>
        </li>
      </ol>
    </div>
  );
}
