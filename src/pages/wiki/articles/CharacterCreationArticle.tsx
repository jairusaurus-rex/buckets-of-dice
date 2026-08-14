import { Link } from "react-router-dom";
import { WikiArticleLinks } from "../../../commons/wiki-article-enum";

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
          <p className="text-sm p-2">Choose gear for your character</p>
        </li>
        <li className="text-lg font-bold">Level Up Character
          <p className="text-sm p-2">Level up your character from level 0 to starting level</p>
        </li>
      </ol>
    </div>
  );
}
