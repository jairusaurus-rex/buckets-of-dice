import { DiceCategories } from "../../data-types/enums/dice-categories-enum";
import type { DiceCategoryType } from "../../data-types/types/DiceCategoryType";

export const diceRollerDummyData: DiceCategoryType[] = [
    {
        id: DiceCategories.POOL,
        title: DiceCategories.POOL,
        diceList: [],
    },
    {
        id: DiceCategories.COMBAT,
        title: DiceCategories.COMBAT,
        diceList: [
            {
                id: Date.now().toString() + "Attack",
                title: "Attack",
                rank: 4
            },
            {
                id: Date.now().toString() + "Defense",
                title: "Defense",
                rank: 4
            },
        ],
    },
    {
        id: DiceCategories.SKILL,
        title: DiceCategories.SKILL,
        diceList: [
            {
                id: Date.now().toString() + "Computing",
                title: "Computing",
                rank: 4
            },
            {
                id: Date.now().toString() + "Culture",
                title: "Culture",
                rank: 4
            },
            {
                id: Date.now().toString() + "Engineering",
                title: "Engineering",
                rank: 4
            },
            {
                id: Date.now().toString() + "Fitness",
                title: "Fitness",
                rank: 4
            },
            {
                id: Date.now().toString() + "Influence",
                title: "Influence",
                rank: 4
            },
            {
                id: Date.now().toString() + "Medicine",
                title: "Medicine",
                rank: 4
            },
            {
                id: Date.now().toString() + "Piloting",
                title: "Piloting",
                rank: 4
            },
            {
                id: Date.now().toString() + "Recon",
                title: "Recon",
                rank: 4
            },
            {
                id: Date.now().toString() + "Science",
                title: "Science",
                rank: 4
            },
            {
                id: Date.now().toString() + "Secrecy",
                title: "Secrecy",
                rank: 4
            },
        ],
    },
    {
        id: DiceCategories.SUIT_GEAR,
        title: DiceCategories.SUIT_GEAR,
        diceList: [
            {
                id: Date.now().toString() + "Armor",
                title: "Armor",
                rank: 4
            },
            {
                id: Date.now().toString() + "Adept",
                title: "Adept",
                rank: 4
            },
            {
                id: Date.now().toString() + "Aid",
                title: "Aid",
                rank: 4
            },
            {
                id: Date.now().toString() + "Accent",
                title: "Accent",
                rank: 4
            },
        ],
    },
    {
        id: DiceCategories.NON_SUIT_GEAR,
        title: DiceCategories.NON_SUIT_GEAR,
        diceList: [],
    },
    {
        id: DiceCategories.VESSEL_TRAVEL,
        title: DiceCategories.VESSEL_TRAVEL,
        diceList: [
            {
                id: Date.now().toString() + "Fold Drive",
                title: "Fold Drive",
                rank: 4
            },
            {
                id: Date.now().toString() + "Scanners",
                title: "Scanners",
                rank: 4
            },
            {
                id: Date.now().toString() + "Repair Bay",
                title: "Repair Bay",
                rank: 4
            },
            {
                id: Date.now().toString() + "Med Bay",
                title: "Med Bay",
                rank: 4
            },
            {
                id: Date.now().toString() + "Stealth Drive",
                title: "Stealth Drive",
                rank: 4
            },
            
        ],
    },
    {
        id: DiceCategories.VESSEL_COMBAT,
        title: DiceCategories.VESSEL_COMBAT,
        diceList: [
            {
                id: Date.now().toString() + "Helm",
                title: "Helm",
                rank: 4
            },
            {
                id: Date.now().toString() + "Ops",
                title: "Ops",
                rank: 4
            },
            {
                id: Date.now().toString() + "Engines",
                title: "Engines",
                rank: 4
            },
            {
                id: Date.now().toString() + "Close Range",
                title: "Close Range",
                rank: 4
            },
            {
                id: Date.now().toString() + "Mid Range",
                title: "Mid Range",
                rank: 4
            },
            {
                id: Date.now().toString() + "Far Range",
                title: "Far Range",
                rank: 4
            },
        ],
    },
    {
        id: DiceCategories.VESSEL_EXTRA,
        title: DiceCategories.VESSEL_EXTRA,
        diceList: [
            {
                id: Date.now().toString() + "Hull",
                title: "Hull",
                rank: 4
            },
        ],
    },
    {
        id: DiceCategories.ASSETS,
        title: DiceCategories.ASSETS,
        diceList: [],
    },
    {
        id: DiceCategories.RELATIONSHIPS,
        title: DiceCategories.RELATIONSHIPS,
        diceList: [],
    }
]


export const shadyLadyData: DiceCategoryType[] = [
    {
        id: DiceCategories.VESSEL_TRAVEL,
        title: DiceCategories.VESSEL_TRAVEL,
        diceList: [
            {
                id: Date.now().toString() + "Fold Drive",
                title: "Fold Drive",
                rank: 6
            },
            {
                id: Date.now().toString() + "Scanners",
                title: "Scanners",
                rank: 8
            },
            {
                id: Date.now().toString() + "Repair Bay",
                title: "Repair Bay",
                rank: 6
            },
            {
                id: Date.now().toString() + "Med Bay",
                title: "Med Bay",
                rank: 6
            },
            {
                id: Date.now().toString() + "Stealth Drive",
                title: "Stealth Drive",
                rank: 6
            },
            
        ],
    },
    {
        id: DiceCategories.VESSEL_COMBAT,
        title: DiceCategories.VESSEL_COMBAT,
        diceList: [
            {
                id: Date.now().toString() + "Helm",
                title: "Helm",
                rank: 6
            },
            {
                id: Date.now().toString() + "Ops",
                title: "Ops",
                rank: 6
            },
            {
                id: Date.now().toString() + "Engines",
                title: "Engines",
                rank: 4
            },
            {
                id: Date.now().toString() + "Close Range",
                title: "Close Range",
                rank: 8
            },
            {
                id: Date.now().toString() + "Mid Range",
                title: "Mid Range",
                rank: 4
            },
            {
                id: Date.now().toString() + "Far Range",
                title: "Far Range",
                rank: 8
            },
        ],
    },
    {
        id: DiceCategories.VESSEL_EXTRA,
        title: DiceCategories.VESSEL_EXTRA,
        diceList: [
            {
                id: Date.now().toString() + "Hull",
                title: "Hull",
                rank: 4
            },
        ],
    }
]


export const abeCharacterData: DiceCategoryType[] = [
    {
        id: DiceCategories.SKILL,
        title: DiceCategories.SKILL,
        diceList: [
            {
                id: Date.now().toString() + "Computing",
                title: "Computing",
                rank: 4
            },
            {
                id: Date.now().toString() + "Culture",
                title: "Culture",
                rank: 6
            },
            {
                id: Date.now().toString() + "Engineering",
                title: "Engineering",
                rank: 12
            },
            {
                id: Date.now().toString() + "Fitness",
                title: "Fitness",
                rank: 4
            },
            {
                id: Date.now().toString() + "Influence",
                title: "Influence",
                rank: 12
            },
            {
                id: Date.now().toString() + "Medicine",
                title: "Medicine",
                rank: 6
            },
            {
                id: Date.now().toString() + "Piloting",
                title: "Piloting",
                rank: 4
            },
            {
                id: Date.now().toString() + "Recon",
                title: "Recon",
                rank: 6
            },
            {
                id: Date.now().toString() + "Science",
                title: "Science",
                rank: 4
            },
            {
                id: Date.now().toString() + "Secrecy",
                title: "Secrecy",
                rank: 6
            },
        ],
    },
    {
        id: DiceCategories.SUIT_GEAR,
        title: DiceCategories.SUIT_GEAR,
        diceList: [
            {
                id: Date.now().toString() + "Armor",
                title: "Armor",
                rank: 4
            },
            {
                id: Date.now().toString() + "Adept",
                title: "Adept",
                rank: 4
            },
            {
                id: Date.now().toString() + "Aid",
                title: "Aid",
                rank: 4
            },
            {
                id: Date.now().toString() + "Accent",
                title: "Accent",
                rank: 6
            },
        ],
    },
    {
        id: DiceCategories.NON_SUIT_GEAR,
        title: DiceCategories.NON_SUIT_GEAR,
        diceList: [
            {
                id: Date.now().toString() + "Holo Projector",
                title: "Holo Projector",
                rank: 8
            },
            {
                id: Date.now().toString() + "Large Arm",
                title: "Large Arm",
                rank: 4
            },
            {
                id: Date.now().toString() + "Psionic blocker",
                title: "Psionic blocker",
                rank: 4
            },
            {
                id: Date.now().toString() + "Disguise kit",
                title: "Disguise kit",
                rank: 4
            },
            {
                id: Date.now().toString() + "Shield",
                title: "Shield",
                rank: 4
            },
            {
                id: Date.now().toString() + "Psionic amplifier",
                title: "Psionic amplifier",
                rank: 4
            },
            {
                id: Date.now().toString() + "Demolition kit",
                title: "Demolition kit",
                rank: 4
            },
            {
                id: Date.now().toString() + "Melee",
                title: "Melee",
                rank: 4
            }
        ],
    },
    {
        id: DiceCategories.ASSETS,
        title: DiceCategories.ASSETS,
        diceList: [
            {
                id: Date.now().toString() + "Psionics",
                title: "Psionics",
                rank: 8
            },
            {
                id: Date.now().toString() + "Companion",
                title: "Companion",
                rank: 8
            },
            {
                id: Date.now().toString() + "Cybernatics",
                title: "Cybernatics",
                rank: 6
            },
            {
                id: Date.now().toString() + "Pirate Scent",
                title: "Pirate Scent",
                rank: 4
            },
            {
                id: Date.now().toString() + "There is a whole in your mind",
                title: "There is a whole in your mind",
                rank: 6
            },
            {
                id: Date.now().toString() + "Diss Track",
                title: "Diss Track",
                rank: 6
            }
        ],
    },
]


export const arykCharacterData: DiceCategoryType[] = [
    {
        id: DiceCategories.SKILL,
        title: DiceCategories.SKILL,
        diceList: [
            {
                id: Date.now().toString() + "Computing",
                title: "Computing",
                rank: 4
            },
            {
                id: Date.now().toString() + "Culture",
                title: "Culture",
                rank: 6
            },
            {
                id: Date.now().toString() + "Engineering",
                title: "Engineering",
                rank: 6
            },
            {
                id: Date.now().toString() + "Fitness",
                title: "Fitness",
                rank: 10
            },
            {
                id: Date.now().toString() + "Influence",
                title: "Influence",
                rank: 4
            },
            {
                id: Date.now().toString() + "Medicine",
                title: "Medicine",
                rank: 6
            },
            {
                id: Date.now().toString() + "Piloting",
                title: "Piloting",
                rank: 4
            },
            {
                id: Date.now().toString() + "Recon",
                title: "Recon",
                rank: 10
            },
            {
                id: Date.now().toString() + "Science",
                title: "Science",
                rank: 6
            },
            {
                id: Date.now().toString() + "Secrecy",
                title: "Secrecy",
                rank: 4
            },
        ],
    },
    {
        id: DiceCategories.SUIT_GEAR,
        title: DiceCategories.SUIT_GEAR,
        diceList: [
            {
                id: Date.now().toString() + "Armor",
                title: "Armor",
                rank: 6
            },
            {
                id: Date.now().toString() + "Adept",
                title: "Adept",
                rank: 4
            },
            {
                id: Date.now().toString() + "Aid",
                title: "Aid",
                rank: 6
            },
            {
                id: Date.now().toString() + "Accent",
                title: "Accent",
                rank: 4
            },
        ],
    },
    {
        id: DiceCategories.NON_SUIT_GEAR,
        title: DiceCategories.NON_SUIT_GEAR,
        diceList: [
            {
                id: Date.now().toString() + "Melee Weapon",
                title: "Melee Weapon",
                rank: 6
            },
            {
                id: Date.now().toString() + "Small Arms Weapon",
                title: "Small Arms Weapon",
                rank: 4
            },
            {
                id: Date.now().toString() + "Survival Kit",
                title: "Survival Kit",
                rank: 4
            },
            {
                id: Date.now().toString() + "Restraining Kit",
                title: "Restraining Kit",
                rank: 4
            },
            {
                id: Date.now().toString() + "Pistol",
                title: "Pistol",
                rank: 4
            },
            {
                id: Date.now().toString() + "Portable Scanner",
                title: "Portable Scanner",
                rank: 6
            }
        ],
    },
    {
        id: DiceCategories.ASSETS,
        title: DiceCategories.ASSETS,
        diceList: [
            {
                id: Date.now().toString() + "Teeth and Claws",
                title: "Teeth and Claws",
                rank: 8
            },
        ],
    },
]


export const nyxCharacterData: DiceCategoryType[] = [
    {
        id: DiceCategories.SKILL,
        title: DiceCategories.SKILL,
        diceList: [
            {
                id: Date.now().toString() + "Computing",
                title: "Computing",
                rank: 46
            },
            {
                id: Date.now().toString() + "Culture",
                title: "Culture",
                rank: 6
            },
            {
                id: Date.now().toString() + "Engineering",
                title: "Engineering",
                rank: 6
            },
            {
                id: Date.now().toString() + "Fitness",
                title: "Fitness",
                rank: 6
            },
            {
                id: Date.now().toString() + "Influence",
                title: "Influence",
                rank: 6
            },
            {
                id: Date.now().toString() + "Medicine",
                title: "Medicine",
                rank: 8
            },
            {
                id: Date.now().toString() + "Piloting",
                title: "Piloting",
                rank: 12
            },
            {
                id: Date.now().toString() + "Recon",
                title: "Recon",
                rank: 6
            },
            {
                id: Date.now().toString() + "Science",
                title: "Science",
                rank: 4
            },
            {
                id: Date.now().toString() + "Secrecy",
                title: "Secrecy",
                rank: 6
            },
        ],
    },
    {
        id: DiceCategories.SUIT_GEAR,
        title: DiceCategories.SUIT_GEAR,
        diceList: [
            {
                id: Date.now().toString() + "Armor",
                title: "Armor",
                rank: 6
            },
            {
                id: Date.now().toString() + "Adept",
                title: "Adept",
                rank: 4
            },
            {
                id: Date.now().toString() + "Aid",
                title: "Aid",
                rank: 4
            },
            {
                id: Date.now().toString() + "Accent",
                title: "Accent",
                rank: 4
            },
        ],
    },
    {
        id: DiceCategories.NON_SUIT_GEAR,
        title: DiceCategories.NON_SUIT_GEAR,
        diceList: [
            {
                id: Date.now().toString() + "Demolition Kit",
                title: "Demolition Kit",
                rank: 4
            },
            {
                id: Date.now().toString() + "Disguise Kit",
                title: "Disguise Kit",
                rank: 4
            },
            {
                id: Date.now().toString() + "Jetpack",
                title: "Jetpack",
                rank: 4
            },
            {
                id: Date.now().toString() + "Restraining Kit",
                title: "Restraining Kit",
                rank: 4
            },
            {
                id: Date.now().toString() + "Pistol 1",
                title: "Pistol 1",
                rank: 4
            },
            {
                id: Date.now().toString() + "Pistol 2",
                title: "Pistol 2",
                rank: 4
            },
            {
                id: Date.now().toString() + "Smuggling Kit",
                title: "Smuggling Kit",
                rank: 4
            }
        ],
    },
    {
        id: DiceCategories.ASSETS,
        title: DiceCategories.ASSETS,
        diceList: [],
    },
]


export const tcharCharacterData: DiceCategoryType[] = [
    {
        id: DiceCategories.SKILL,
        title: DiceCategories.SKILL,
        diceList: [
            {
                id: Date.now().toString() + "Computing",
                title: "Computing",
                rank: 46
            },
            {
                id: Date.now().toString() + "Culture",
                title: "Culture",
                rank: 6
            },
            {
                id: Date.now().toString() + "Engineering",
                title: "Engineering",
                rank: 4
            },
            {
                id: Date.now().toString() + "Fitness",
                title: "Fitness",
                rank: 6
            },
            {
                id: Date.now().toString() + "Influence",
                title: "Influence",
                rank: 6
            },
            {
                id: Date.now().toString() + "Medicine",
                title: "Medicine",
                rank: 8
            },
            {
                id: Date.now().toString() + "Piloting",
                title: "Piloting",
                rank: 4
            },
            {
                id: Date.now().toString() + "Recon",
                title: "Recon",
                rank: 10
            },
            {
                id: Date.now().toString() + "Science",
                title: "Science",
                rank: 6
            },
            {
                id: Date.now().toString() + "Secrecy",
                title: "Secrecy",
                rank: 10
            },
        ],
    },
    {
        id: DiceCategories.SUIT_GEAR,
        title: DiceCategories.SUIT_GEAR,
        diceList: [
            {
                id: Date.now().toString() + "Armor",
                title: "Armor",
                rank: 6
            },
            {
                id: Date.now().toString() + "Adept",
                title: "Adept",
                rank: 4
            },
            {
                id: Date.now().toString() + "Aid",
                title: "Aid",
                rank: 4
            },
            {
                id: Date.now().toString() + "Accent",
                title: "Accent",
                rank: 4
            },
        ],
    },
    {
        id: DiceCategories.NON_SUIT_GEAR,
        title: DiceCategories.NON_SUIT_GEAR,
        diceList: [
            {
                id: Date.now().toString() + "Pistol 1",
                title: "Pistol 1",
                rank: 6
            },
            {
                id: Date.now().toString() + "Pistol 2",
                title: "Pistol 2",
                rank: 6
            },
            {
                id: Date.now().toString() + "Signal Jammer",
                title: "Signal Jammer",
                rank: 6
            },
            {
                id: Date.now().toString() + "Hackers Kit",
                title: "Hackers Kit",
                rank: 4
            },
            {
                id: Date.now().toString() + "Portable Scanner",
                title: "Portable Scanner",
                rank: 4
            },
            {
                id: Date.now().toString() + "Med Kit",
                title: "Med Kit",
                rank: 4
            },
            {
                id: Date.now().toString() + "Science Kit",
                title: "Science Kit",
                rank: 4
            }
        ],
    },
    {
        id: DiceCategories.ASSETS,
        title: DiceCategories.ASSETS,
        diceList: [
            {
                id: Date.now().toString() + "Camo Scales",
                title: "Camo Scales",
                rank: 8
            }
        ],
    },
]