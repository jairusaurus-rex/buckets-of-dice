import { SkillData } from "../../../assets/data/SkillData";
import art from "../../../assets/images/art/skills_datapad.png"
import DiceText from "../../../components/commons/DiceText";


export const SkillsArticle = () => {

    const skillData = SkillData.sort((a, b) => a.name.localeCompare(b.name));
    return (
        <div className="p-2 text-justify">
            <img src={art} alt={`character_creation`} />
            <p className="p-2">Skill are represented as a dice rank. A skill can be a <DiceText>4</DiceText>, <DiceText>6</DiceText>, <DiceText>8</DiceText>, <DiceText>10</DiceText>, or <DiceText>12</DiceText>. <DiceText>4</DiceText> represents the worst a skill can be 
                and <DiceText>12</DiceText> the absolute best</p>
            <p className="p-2">There are ten skills that a spacer has in Into the Heavens. A usual dice check uses one skill, unless a feat gives 
                them more or there are special circumstances. Unless a feat or special circumstance applies, a spacer uses one skill for each dice 
                check. In these instances, if more than one skill makes sense for the check, the player chooses which skill to use.</p>
             <div className="columns-1 md:columns-2 gap-8">
                {skillData.map((skill) => (
                    <div key={skill.id} className="mt-2 p-2  break-inside-avoid">
                        <div className="font-bold">
                            {skill.name}
                        </div>

                        <div>
                            {skill.description}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};