import { WikiArticleLinks } from "../../data-types/enums/wiki-article-enum";
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
        description: "Gain a special dice called Augments that starts at d6. Also gain two subchoices.",
        specialDiceName: "Augments",
        specialDiceRank: 6,
        link: `/wiki/${WikiArticleLinks.LEVELING_MODULAR_AUGMENTS}`,
        extra:{
            lore: "Due to genetics or mutations, picking this feat alters the person to be more than what others of their species are.",
            extraInfo: [],
        },
        subChoices: [
            {
                id: "heightened-hearing",
                name: "Heightened Hearing",
                description: "Use the special dice when doing any recon involving listening.",
            },
            {
                id: "heightened-sight",
                name: "Heightened Sight",
                description: "Use the special dice when doing any recon involving seeing.",
            },
            {
                id: "heightened-smell",
                name: "Heightened Smell",
                description: "Use the special dice when doing any recon involving smelling.",
            },
            {
                id: "morpher",
                name: "Morpher",
                description: "Use the special dice when disguising oneself.",
            },
            {
                id: "regeneration",
                name: "Regeneration",
                description: "Use the special dice when healing one's own grit.",
            },
            {
                id: "reflexes",
                name: "Reflexes",
                description: "Spend one stamina to be able to use the special dice when avoiding enemy attacks for the rest of the fight.",
            },
            {
                id: "sharp",
                name: "Sharp",
                description: "Spend one stamina to be able to use the special dice when attacking melee for the rest of the fight.",
            },
            {
                id: "stealth",
                name: "Stealth",
                description: "Use the special dice when sneaking around.",
            },
            {
                id: "strength",
                name: "Strength",
                description: "Use the special dice with any dice check involving strength.",
            },
            {
                id: "swift",
                name: "Swift",
                description: "Gain one free movement per round.",
            },
            {
                id: "weather-survival",
                name: "Weather Survival",
                description: "Use the special dice when surviving weather.",
            },
        ],

        advanced: {
            id: "modular-augments-advanced",
            name: "Modular Augments",
            description: "Increase the Augments special dice to d8 and pick two more subchoices.",
            specialDiceName: "Augments",
            specialDiceRank: 8,
        },

        mastery: {
            id: "modular-augments-mastery",
            name: "Modular Augments",
            description: "Increase the Augments special dice to d10 and pick two more subchoices.",
            specialDiceName: "Augments",
            specialDiceRank: 10,
        },
    },

    {
        id: "modular-companion",
        name: "Modular Companion",
        description: "Gain a special dice called Companion that starts at d6. Also gain two subchoices.",
        specialDiceName: "Companion",
        specialDiceRank: 6,
        link: `/wiki/${WikiArticleLinks.LEVELING_MODULAR_COMPANION}`,
        extra:{
            lore: "You have a creature that travels with you and helps you in your fights and adventures.",
            extraInfo: [
                "Companions have a part of the fight with their master. Any Ally that attacks a target in the same zone as the companion can use the special dice.",
                "The master can spend one action to move the, companion up to 2 zones.",
                "In each fight, keep track of the damage the companion takes. If it is greater than the special dice, they are defeated and cannot be used until a week's rest.",
                "A Companion can defend against attacks using their diceand their master’s defense dice.",
            ],
        },
        subChoices: [
            {
                id: "adorable",
                name: "Adorable",
                description: "Use the special dice when trying to charm someone.",
            },
            {
                id: "defender",
                name: "Defender",
                description: "Any ally can use the special dice when defending in the same zone as the companion.",
            },
            {
                id: "durable",
                name: "Durable",
                description: "When defending itself, the Companion can use its dice twice.",
            },
            {
                id: "fierce",
                name: "Fierce",
                description: "Use the special dice when trying to intimidate someone.",
            },
            {
                id: "fetching",
                name: "Fetching",
                description: "Use the special dice when stealing or picking pockets.",
            },
            {
                id: "flying",
                name: "Flying",
                description: "The Companion gains the flight ability.",
            },
            {
                id: "natural-camouflage",
                name: "Natural Camouflage",
                description: "Use the special dice when stealthing through a wilderness.",
            },
            {
                id: "reach",
                name: "Reach",
                description: "Allies can use the special dice when adjacent to the companion's zone.",
            },
            {
                id: "sprinter",
                name: "Sprinter",
                description: "The Companion can move 4 zones instead.",
            },
            {
                id: "steed",
                name: "Steed",
                description: "Spend one action to use your Companion as a steed. You can start fights this way. When it is a steed, you move when it moves, and only you can use its special dice when attacking. Dismounting the Companion can be done for free.",
            },
            {
                id: "tracker",
                name: "Tracker",
                description: "Use the special dice when tracking or searching for someone.",
            },
            {
                id: "venomous",
                name: "Venomous",
                description: "If the Companion dice was used against a living target to deal damage, that target gains the Bleed condition unless immune to Poison.",
            },
        ],

        advanced: {
            id: "modular-companion-advanced",
            name: "Modular Companion",
            description: "Increase the Companion special dice to d8 and pick two more subchoices.",
            specialDiceName: "Companion",
            specialDiceRank: 8,
        },

        mastery: {
            id: "modular-companion-mastery",
            name: "Modular Companion",
            description: "Increase the Companion special dice to d10 and pick two more subchoices.",
            specialDiceName: "Companion",
            specialDiceRank: 10,
        },
    },

    {
        id: "modular-cybernetics",
        name: "Modular Cybernetics",
        description: "Gain a special dice called Cybernetics that starts at d6. Also gain two subchoices.",
        specialDiceName: "Cybernetics",
        specialDiceRank: 6,
        link: `/wiki/${WikiArticleLinks.LEVELING_MODULAR_CYBERNETICS}`,
        extra: {
            lore: "You have integrated cybernetic enhancements that augment your capabilities.",
            extraInfo: []
        },
        subChoices: [
            {
                id: "blade",
                name: "Blade",
                description: "You can use the special dice as though it was an option for a melee weapon.",
            },
            {
                id: "concealment",
                name: "Concealment",
                description: "You can bring gear into restricted areas.",
            },
            {
                id: "gun",
                name: "Gun",
                description: "You can use the special dice as though it was an option for a small arms weapon.",
            },
            {
                id: "heightened-hearing",
                name: "Heightened Hearing",
                description: "Use the special dice when doing any recon involving listening.",
            },
            {
                id: "heightened-sight",
                name: "Heightened Sight",
                description: "Use the special dice when doing any recon involving seeing.",
            },
            {
                id: "hacking",
                name: "Hacking",
                description: "Use the special dice when dealing with computers.",
            },
            {
                id: "strength",
                name: "Strength",
                description: "Use the special dice with any dice check involving strength.",
            },
            {
                id: "sturdy",
                name: "Sturdy",
                description: "Spend one credit to be able to use the special dice when avoiding enemy attacks for the rest of the fight.",
            },
            {
                id: "swift",
                name: "Swift",
                description: "Gain one free movement per round.",
            },
            {
                id: "vacuum-survival",
                name: "Vacuum Survival",
                description: "Use the special dice when surviving in outer space or non-atmospheric areas.",
            },
            {
                id: "vessel-integration",
                name: "Vessel Integration",
                description: "Use the special dice when dealing with a vessel component.",
            },
        ],

        advanced: {
            id: "modular-cybernetics-advanced",
            name: "Modular Cybernetics",
            description: "Increase the Cybernetics special dice to d8 and pick two more subchoices.",
            specialDiceName: "Cybernetics",
            specialDiceRank: 8,
        },

        mastery: {
            id: "modular-cybernetics-mastery",
            name: "Modular Cybernetics",
            description: "Increase the Cybernetics special dice to d10 and pick two more subchoices.",
            specialDiceName: "Cybernetics",
            specialDiceRank: 10,
        },
    },

    {
        id: "modular-psionics",
        name: "Modular Psionics",
        description: "Gain a special dice called Psionics that starts at d6. Also gain two subchoices.",
        specialDiceName: "Psionics",
        specialDiceRank: 6,
        link: `/wiki/${WikiArticleLinks.LEVELING_MODULAR_PSIONICS}`,
        extra: {
            lore: "You have psychic powers, either been born with them, part of your species, or giving to you by science or supernatural means.",
            extraInfo: [
                "Sub Choices are special psychic moves.",
                "Psychic moves take 2 actions and spending one stamina to use.",
                "If a roll is made with the Psychic move, you may use the special dice along with what the move says.",
            ],
        },
        subChoices: [
            {
                id: "banish",
                name: "Banish",
                description: "Make an attack targeting an extra-dimensional enemy within 5 zones. If twice the result is equal to or more than the remaining health of the target, the target is removed from this dimension. Otherwise, do psychic damage equal to half the result.",
            },
            {
                id: "blast",
                name: "Blast",
                description: "Make an attack against a target within 5 zones. Do physical damage equal to the result plus half the result.",
            },
            {
                id: "cleanse",
                name: "Cleanse",
                description: "Make a Medicine check. Remove a number of conditions from you and your allies equal to the result.",
            },
            {
                id: "command",
                name: "Command",
                description: "Make an attack against a target within 5 zones. Do Parley damage equal to the result.",
            },
            {
                id: "fireball",
                name: "Fireball",
                description: "Make an attack against everyone in a zone that is within 5 zones. Do fire damage equal to the result.",
            },
            {
                id: "fire-strike",
                name: "Fire Strike",
                description: "Make an attack against a target within 5 zones. Do fire damage equal to the result plus and set the target on fire, giving them the Bleed and Crippled conditions.",
            },
            {
                id: "fire-summon",
                name: "Fire Summon",
                description: "Set a zone on fire. Make an Influence check with your special dice to make a minion. You and your allies can use that dice when attacking any target in that zone.",
            },
            {
                id: "illusion",
                name: "Illusion",
                description: "Make an Influence or Secrecy check. If the result is equal to all enemies' total ranks, you create a human-sized illusion that all will believe until they interact with or attack it. They will believe it is real even if they saw it manifest.",
            },
            {
                id: "levitate",
                name: "Levitate",
                description: "Make an attack against targets within 5 zones. You can move enemies from one zone to another, spending points equal to your result. Each enemy moved costs their size plus rank.",
            },
            {
                id: "lightning-ball",
                name: "Lightning Ball",
                description: "Make an attack against everyone in a zone that is within 5 zones. Do shock damage equal to the result.",
            },
            {
                id: "lightning-strike",
                name: "Lightning Strike",
                description: "Make an attack against a target within 5 zones. Do shock damage equal to the result and set the target on fire, giving them the Slowed and Crippled conditions.",
            },
            {
                id: "read",
                name: "Read",
                description: "You can read a mind to ask one question. The GM must answer honestly based on what the target knows about that question. Beings with psychic resistances cannot be read.",
            },
            {
                id: "shield",
                name: "Shield",
                description: "Target a zone within 5 zones. Until the next player's phase, all allies within that zone can use your special dice to defend themselves.",
            },
            {
                id: "weaken",
                name: "Weaken",
                description: "Make an attack against a target within 5 zones. Instead of damage, divide your result by 5, rounded up. Give that many conditions to your target from this list: Bleed, Crippled, Frightened, Grounded, Slowed.",
            },
        ],

        advanced: {
            id: "modular-psionics-advanced",
            name: "Modular Psionics",
            description: "Increase the Psionics special dice to d8 and pick two more subchoices.",
            specialDiceName: "Psionics",
            specialDiceRank: 8,
        },

        mastery: {
            id: "modular-psionics-mastery",
            name: "Modular Psionics",
            description: "Increase the Psionics special dice to d10 and pick two more subchoices.",
            specialDiceName: "Psionics",
            specialDiceRank: 10,
        },
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