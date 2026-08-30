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