import art from "../../../assets/images/art/skills_datapad.png"


export const SkillsArticle = () => {
    return (
        <div className="p-2 text-justify">
            <img src={art} alt={`character_creation`} />
            <p className="p-2">There are ten skills that a spacer has in Into the Heavens. A usual dice check uses one skill, unless a feat gives them more or there are special circumstances. Unless a feat or special circumstance applies, a spacer uses one skill for each dice check. In these instances, if more than one skill makes sense for the check, the player chooses which skill to use.</p>
            <ul className="list-none list-inside pl-4 space-y-2">
                <li className="list-item p-2"><span className="font-bold text-lg">Computing</span> - a skill related to technology and systems. This deals with software rather than hardware. Using a computer, a ships panel, or any sort of hacking uses this skill. Some gear can use this skill if there is an interface on the gear.</li>
                <li className="list-item p-2"><span className="font-bold text-lg">Culture </span> - a skill related to social interactions and customs. Reciting lore, history or customs fall under this skill, as does understanding different societies. Using instruments or preforming any sort of artistic activity uses this skill.</li>
                <li className="list-item p-2"><span className="font-bold text-lg">Engineering </span> - a skill related to building and maintaining structures and machines. This deals with hardware rather than software. Repairing or modifying equipment uses this skill. If a gear has mechanical parts, this skill may be used.</li>
                <li className="list-item p-2"><span className="font-bold text-lg">Fitness </span> - a skill related to physical health and endurance. This skill is used for activities that require physical exertion and stamina. Surviving a planet's harsh conditions uses this skill or dealing with environmental hazards.</li>
                <li className="list-item p-2"><span className="font-bold text-lg">Influence </span> - a skill related to persuasion and social manipulation. This skill is used for interacting with others and achieving desired outcomes through social means. Pursuading others or manipulating social situations uses this skill. This usual means an honest attempt to influence an individual uses this skill.</li>
                <li className="list-item p-2"><span className="font-bold text-lg">Medicine </span> - a skill related to healing and medical knowledge. This skill is used for diagnosing and treating injuries and illnesses. A spacer can use this skill to heal themselves or others.</li>
                <li className="list-item p-2"><span className="font-bold text-lg">Piloting </span> - a skill related to operating vehicles and spacecraft. This skill is used for navigating and controlling various types of vehicles in space or on planetary surfaces.</li>
                <li className="list-item p-2"><span className="font-bold text-lg">Recon </span> - a skill related to gathering information and surveillance. This skill is used for collecting intelligence about targets or environments. This can be done with research or simply observing the environment.</li>
                <li className="list-item p-2"><span className="font-bold text-lg">Science</span> - a skill related to understanding the natural world and its phenomena. This skill is used for conducting research and making discoveries about the universe.</li>
                <li className="list-item p-2"><span className="font-bold text-lg">Secrecy</span> - a skill related to keeping information hidden and maintaining confidentiality. This skill is used for protecting sensitive data and preventing unauthorized access.</li>
            </ul>
        </div>
    );
};