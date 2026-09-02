import type { FeatType } from "../../data-types/types/FeatType";
export const FeatData: FeatType[] = [
    {
        id: "ace-vessel-combative",
        name: "Ace Vessel Combative",
        description: "You can be a part of 2 vessel combat Posts each vessel combat round.",
        advanced: {
            id: "ace-vessel-combative-advanced",
            name: "Advanced Ace Vessel Combative",
            description: "You can be a part of 3 vessel combat Posts each vessel combat round.",
        },
        mastery: {
            id: "ace-vessel-combative-mastery",
            name: "Mastery Ace Vessel Combative",
            description: "You can be a part of 4 vessel combat Posts each vessel combat round.",
        },
    },
    {
        id: "ace-vessel-traveller",
        name: "Ace Vessel Traveller",
        description: "You can be a part of 2 Travel Posts each travel round.",
        advanced: {
            id: "ace-vessel-traveller-advanced",
            name: "Advanced Ace Vessel Traveller",
            description: "You can be a part of 3 Travel Posts each travel round.",
        },
        mastery: {
            id: "ace-vessel-traveller-mastery",
            name: "Mastery Ace Vessel Traveller",
            description: "You can be a part of 4 Travel Posts each travel round.",
        },
    },
    {
        id: "aggressive-initiative",
        name: "Aggressive Initiative",
        description: "Before the fight, make a test using either Fitness or Recon plus one weapon gear of your choice. Take the result as though creating an asset; however, instead of an asset, you can start your attack dice at the asset dice rank. Results: 0-4 = d4, 5-9 = d6, 10-14 = d8, 15-19 = d10, 20+ = d12.",
    },
    {
        id: "aggressive-response",
        name: "Aggressive Response",
        description: "When you take damage from an attack, you can spend one stamina to UP your attack dice.",
    },
    {
        id: "brawler",
        name: "Brawler",
        description: "Non-lethal damage is no longer halved.",
    },
    {
        id: "careful-attack",
        name: "Careful Attack",
        description: "Once per round, you can halve your result. If you do so, UP your defense dice.",
    },
    {
        id: "cleave",
        name: "Cleave",
        description: "Once per round, when attacking with a melee attack, you can choose to deal half damage to every enemy in that zone instead of damaging one target.",
    },
    {
        id: "cover-fire",
        name: "Cover Fire",
        description: "When attacking from a distance that is 4 or more zones away from any enemy, UP your defense dice.",
        advanced: {
            id: "cover-fire-advanced",
            name: "Advanced Cover Fire",
            description: "The distance required for this ability is reduced to 3 zones away.",
        },
        mastery: {
            id: "cover-fire-mastery",
            name: "Mastery Cover Fire",
            description: "The distance required for this ability is reduced to 2 zones away.",
        },
    },
    {
        id: "defensive-initiative",
        name: "Defensive Initiative",
        description: "Before the fight, make a test using either Fitness, Recon, or Secrecy plus the Armor gear. Take the result as though creating an asset; however, instead of an asset, you can start your defense dice at the asset dice rank. Results: 0-4 = d4, 5-9 = d6, 10-14 = d8, 15-19 = d10, 20+ = d12.",
    },
    {
        id: "defensive-response",
        name: "Defensive Response",
        description: "When you take damage from an attack, you can spend one stamina to UP your defense dice.",
    },
    {
        id: "doctor",
        name: "Doctor",
        description: "You can use the Medical Kit to heal an ally in an adjacent zone.",
        advanced: {
            id: "doctor-advanced",
            name: "Advanced Doctor",
            description: "You can use the Medical Kit to heal an ally up to two zones away.",
        },
        mastery: {
            id: "doctor-mastery",
            name: "Mastery Doctor",
            description: "You can use the Medical Kit to heal an ally up to three zones away.",
        },
    },
    {
        id: "dual-melee",
        name: "Dual Melee",
        description: "You can have and use up to two melee weapons. When selecting this feat, you may change one of your non-suit gears into a melee weapon, or you can choose to gain a d4 melee weapon.",
    },
    {
        id: "dual-pistols",
        name: "Dual Pistols",
        description: "You can have and use up to two small arms weapons. When selecting this feat, you may change one of your non-suit gears into a small arms weapon, or you can choose to gain a d4 small arms weapon.",
    },
    {
        id: "energetic",
        name: "Energetic",
        description: "Increase your stamina max by 1.",
        advanced: {
            id: "energetic-advanced",
            name: "Advanced Energetic",
            description: "Increase your stamina max by 1 again.",
        },
        mastery: {
            id: "energetic-mastery",
            name: "Mastery Energetic",
            description: "Increase your stamina max by 1 again.",
        },
    },
    {
        id: "explosive-round",
        name: "Explosive Round",
        description: "Once per fight, spend one credit to activate your explosive rounds. After dealing damage with a non-melee attack, deal half that damage to everyone else in the same zone as your target. You can deactivate it, but you must spend another credit to reactivate it during that fight.",
    },
    {
        id: "guardian",
        name: "Guardian",
        description: "When another player character is being attacked while in the same zone as you, you can DOWN your defense dice to UP their defense dice.",
        advanced: {
            id: "guardian-advanced",
            name: "Advanced Guardian",
            description: "You can use this ability for other player characters in adjacent zones.",
        },
        mastery: {
            id: "guardian-mastery",
            name: "Mastery Guardian",
            description: "You can use this ability for other player characters up to two zones away.",
        },
    },
    {
        id: "immunity",
        name: "Immunity",
        description: "When selecting this feat, pick either Disease, Fear, Madness, or Poison. You are immune to any damage or effect that comes from what you chose.",
        advanced: {
            id: "immunity-advanced",
            name: "Advanced Immunity",
            description: "Pick a second item from the list to gain the same immunity.",
        },
        mastery: {
            id: "immunity-mastery",
            name: "Mastery Immunity",
            description: "Pick a third item from the list to gain the same immunity.",
        },
    },
    {
        id: "indomitable",
        name: "Indomitable",
        description: "Parley damage is no longer halved.",
    },
    {
        id: "martial-arts",
        name: "Martial Arts",
        description: "When making a melee attack without any gear dice, you can use your attack dice twice.",
    },
    {
        id: "martial-defense",
        name: "Martial Defense",
        description: "When making a defense test, you can choose to use no gear dice. If you do so, you can use your defense dice twice.",
    },
    {
        id: "mobile",
        name: "Mobile",
        description: "You can use the disengage action for free.",
    },
    {
        id: "modular-augments",
        name: "Modular Augments",
        description: "See the Modular Feats chapter.",
    },
    {
        id: "modular-companion",
        name: "Modular Companion",
        description: "See the Modular Feats chapter.",
    },
    {
        id: "modular-cybernetics",
        name: "Modular Cybernetics",
        description: "See the Modular Feats chapter.",
    },
    {
        id: "modular-psionics",
        name: "Modular Psionics",
        description: "See the Modular Feats chapter.",
    },
    {
        id: "multi-attack",
        name: "Multi-Attack",
        description: "Once per round, when attacking, you can DOWN your attack dice before the attack. If you do, you can use your attack dice twice.",
        advanced: {
            id: "multi-attack-advanced",
            name: "Advanced Multi-Attack",
            description: "Instead, use your attack dice three times.",
        },
        mastery: {
            id: "multi-attack-mastery",
            name: "Mastery Multi-Attack",
            description: "Instead, use your attack dice four times.",
        },
    },
    {
        id: "noncombatant",
        name: "Noncombatant",
        description: "If you end the player's turn without attacking, targeting, damaging, or harming an enemy, and without using the PRESS action, UP your defense dice.",
    },
    {
        id: "parry",
        name: "Parry",
        description: "You can use one melee weapon when defending against attacks in the same zone as you.",
        advanced: {
            id: "parry-advanced",
            name: "Advanced Parry",
            description: "You can also use one melee weapon when defending against an attack from an adjacent zone.",
        },
        mastery: {
            id: "parry-mastery",
            name: "Mastery Parry",
            description: "You can always use one melee weapon when defending against attacks.",
        },
    },
    {
        id: "party-face",
        name: "Party Face",
        description: "When using a team reputation dice, use that dice twice.",
    },
    {
        id: "persistence-stealth",
        name: "Persistence Stealth",
        description: "When attacking, your stealth asset does not get removed after the attack.",
    },
    {
        id: "pistol-safety",
        name: "Pistol Safety",
        description: "When attacking with a small arms weapon, you no longer DOWN your defense dice when attacking while there is an enemy in the same zone as you.",
    },
    {
        id: "rage-attack",
        name: "Rage Attack",
        description: "Once per round, you can DOWN your defense dice to add your Fitness dice to a melee attack.",
    },
    {
        id: "rally",
        name: "Rally",
        description: "Once per round, you can use an action and DOWN your defense dice to UP the defense dice of every other player character in the same or an adjacent zone.",
        advanced: {
            id: "rally-advanced",
            name: "Advanced Rally",
            description: "Include all player characters who are within 3 zones of you.",
        },
        mastery: {
            id: "rally-mastery",
            name: "Mastery Rally",
            description: "Include all player characters who are within 5 zones of you.",
        },
    },
    {
        id: "reach",
        name: "Reach",
        description: "You can target an enemy in an adjacent zone with your melee weapon.",
    },
    {
        id: "rifle-safety",
        name: "Rifle Safety",
        description: "When attacking with a large arms weapon, you no longer DOWN your defense dice when there is an enemy in an adjacent zone. You still need to DOWN your defense dice when you are in the same zone as an enemy.",
    },
    {
        id: "skill-expert",
        name: "Skill Expert",
        description: "Pick a skill when selecting this feat. When using that skill, you can use that dice twice.",
        advanced: {
            id: "skill-expert-advanced",
            name: "Advanced Skill Expert",
            description: "Pick a second skill to gain the same ability.",
        },
        mastery: {
            id: "skill-expert-mastery",
            name: "Mastery Skill Expert",
            description: "Pick a third skill to gain the same ability.",
        },
    },
    {
        id: "sneak-attack",
        name: "Sneak Attack",
        description: "When using a small arms weapon or melee weapon, if the target does not know where you are, shares a zone with an ally, or you have a stealth asset, add your Secrecy dice to that attack.",
    },
    {
        id: "sniper",
        name: "Sniper",
        description: "You can target anyone from up to 10 zones away while using a large arms weapon.",
    },
    {
        id: "steady-shot",
        name: "Steady Shot",
        description: "You can target anyone from up to 5 zones away while using a small arms weapon.",
    },
    {
        id: "stealthy",
        name: "Stealthy",
        description: "When using a stealth asset to do anything other than attack, you can also use your Secrecy dice. If Secrecy was already the skill being used, use it twice instead of once.",
    },
    {
        id: "suit-expert",
        name: "Suit Expert",
        description: "Pick a suit gear when selecting this feat. When using that gear, you can use that dice twice.",
        advanced: {
            id: "suit-expert-advanced",
            name: "Advanced Suit Expert",
            description: "Pick a second suit gear to gain the same ability.",
        },
        mastery: {
            id: "suit-expert-mastery",
            name: "Mastery Suit Expert",
            description: "Pick a third suit gear to gain the same ability.",
        },
    },
    {
        id: "taunter",
        name: "Taunter",
        description: "Once per round, you can DOWN your attack dice before the attack. If you do, UP the defense dice of every other player character who is within 5 zones of you.",
    },
    {
        id: "toughness",
        name: "Toughness",
        description: "Increase your grit max by 2.",
        advanced: {
            id: "toughness-advanced",
            name: "Advanced Toughness",
            description: "Increase your grit max by 2 again.",
        },
        mastery: {
            id: "toughness-mastery",
            name: "Mastery Toughness",
            description: "Increase your grit max by 2 again.",
        },
    },
    {
        id: "unstoppable",
        name: "Unstoppable",
        description: "You need to roll two 1s in your dice pool to gain a condition instead of one.",
    },
    {
        id: "walk-it-off",
        name: "Walk It Off",
        description: "When an enemy attempts to give you a condition, you can immediately DOWN your attack dice to prevent yourself from gaining that condition.",
    },

    // --------------------
    // Species Feats
    // --------------------

    {
        id: "bek-leather-wings",
        name: "Leather Wings",
        description: "You have the flight ability.",
        species: "Bek",
    },
    {
        id: "chyrax-camo-scales",
        name: "Camo Scales",
        description: "Gain a d8 bonus on all stealth checks.",
        species: "Chyrax",
        specialDiceName: "Camo Scales",
        specialDiceRank: 8,
    },
    {
        id: "drakari-claws-and-teeth",
        name: "Claws and Teeth",
        description: "Gain a d6 bonus on attacks against targets in the same zone.",
        species: "Drakari",
        specialDiceName: "Claws and Teeth",
        specialDiceRank: 6,
    },
    {
        id: "droids-modular-cybernetics",
        name: "Modular Feat: Cybernetics",
        description: "Gain the Modular Cybernetics feat. You are also able to gain its Advanced version at level 3 and its Mastery version at level 6.",
        species: "Droids",
    },
    {
        id: "empian-modular-psionics",
        name: "Modular Feat: Psionics",
        description: "Gain the Modular Psionics feat. You are also able to gain its Advanced version at level 3 and its Mastery version at level 6.",
        species: "Empian",
    },
    {
        id: "feyra-long-lived",
        name: "Long Lived",
        description: "Gain a d8 benefit when using your age to influence people and when using the Navigation Post.",
        species: "Feyra",
        specialDiceName: "Long Lived",
        specialDiceRank: 8,
    },
    {
        id: "flona-plant-regeneration",
        name: "Plant Regeneration",
        description: "Gain a d10 bonus whenever healing your own Grit.",
        species: "Flona",
        specialDiceName: "Plant Regeneration",
        specialDiceRank: 10,
    },
    {
        id: "humans-skilled",
        name: "Skilled",
        description: "Improve two skills that are at d4 and one skill that is at d6.",
        species: "Humans",
    },
    {
        id: "locanus-keen-sight",
        name: "Keen Sight",
        description: "Gain a d6 bonus on attacks against targets that are not in the same zone or an adjacent zone.",
        species: "Locanus",
        specialDiceName: "Keen Sight",
        specialDiceRank: 6,
    },
    {
        id: "pawnian-any-feat",
        name: "Versatile",
        description: "Pick any non-modular feat.",
        species: "Pawnian",
    },
    {
        id: "rhazak-breath-weapon",
        name: "Breath Weapon",
        description: "Gain a d6 bonus on attacks against targets in an adjacent zone.",
        species: "Rhazak",
        specialDiceName: "Breath Weapon",
        specialDiceRank: 6,
    },
    {
        id: "urzi-thick-hide",
        name: "Thick Hide",
        description: "Gain a d6 bonus on defense checks when all attacks are coming from the same or adjacent zones.",
        species: "Urzi",
        specialDiceName: "Thick Hide",
        specialDiceRank: 6,
    },
    {
        id: "velki-nimble-footed",
        name: "Nimble Footed",
        description: "Gain one free movement per turn.",
        species: "Velki",
    },
    {
        id: "vrants-modular-modified",
        name: "Modular Feat: Modified",
        description: "Gain the Modular Modified feat. You are also able to gain its Advanced version at level 3 and its Mastery version at level 6.",
        species: "Vrants",
    },
    {
        id: "zivren-scurry",
        name: "Scurry",
        description: "Gain a d6 bonus on defense checks when all attacks are not coming from the same zone.",
        species: "Zivren",
        specialDiceName: "Scurry",
        specialDiceRank: 6,
    },
];