import { WikiArticleLinks } from "../../data-types/enums/wiki-article-enum";
import type { SpeciesType } from "../../data-types/types/SpeciesType";

export const SpeciesData: SpeciesType[] = [
    {
        name: "Bek",
        description: "Humanoids with bat ears, black horns, and leather wings that fold into a cape.",
        pageLink: {
            name: "Bek",
            link: `/wiki/${WikiArticleLinks.SPECIES_BEK}`
        },
        featName: "Leather Wings",
        featDescription: "Gain the Flight ability.",
    },
    {
        name: "Chyrax",
        description: "Humanoid reptilian people with small tails who can change the color of their scales at will.",
        pageLink: {
            name: "Chyrax",
            link: `/wiki/${WikiArticleLinks.SPECIES_CHYRAX}`
        },
        featName: "Camo Scales",
        featDescription: "Gain a d8 bonus on all Stealth checks.",
    },
    {
        name: "Drakari",
        description: "Honorable warriors of the Star Alliance who resemble Utah Raptors.",
        pageLink: {
            name: "Drakari",
            link: `/wiki/${WikiArticleLinks.SPECIES_DRKARI}`
        },
        featName: "Claws and Teeth",
        featDescription: "Gain a d6 bonus on attacks against targets in the same zone.",
    },
    {
        name: "Droids",
        description: "Some are built individually, some are built en masse, and some are a race of free machines. Each has their own degree of sapience and free will, up to the player.",
        pageLink: {
            name: "Droids",
            link: `/wiki/${WikiArticleLinks.SPECIES_DROIDS}`
        },
        featName: "Modular Feat: Cybernetics",
        featDescription: "Also able to gain the Advanced version at level 3 and Mastery version at level 6.",
    },
    {
        name: "Empian",
        description: "Elegant people with large eyes and large, fuzzy ears. They are all born with psychic abilities.",
        pageLink: {
            name: "Empian",
            link: `/wiki/${WikiArticleLinks.SPECIES_EMPIANS}`
        },
        featName: "Modular Feat: Psionics",
        featDescription: "Also able to gain the Advanced version at level 3 and Mastery version at level 6.",
    },
    {
        name: "Feyra",
        description: "Long-lived humanoids with goat-like horns, ears, eyes, and feet.",
        pageLink: {
            name: "Feyra",
            link: `/wiki/${WikiArticleLinks.SPECIES_FEYRA}`
        },
        featName: "Long Lived",
        featDescription: "Gain a d8 benefit when using your age to influence people and when using the Navigation post.",
    },
    {
        name: "Flona",
        description: "Plant-based humanoids with leaves that resemble hair and clothing.",
        pageLink: {
            name: "Flona",
            link: `/wiki/${WikiArticleLinks.SPECIES_FLONA}`
        },
        featName: "Plant Regeneration",
        featDescription: "Gain a d10 bonus whenever healing your own Grit.",
    },
    {
        name: "Humans",
        description: "Not much has changed in 1,000 years.",
        pageLink: {
            name: "Humans",
            link: `/wiki/${WikiArticleLinks.SPECIES_HUMANS}`
        },
        featName: "Skilled",
        featDescription: "Improve two skills that are at d4 and one that is at d6.",
    },
    {
        name: "Locanus",
        description: "Insect-like humanoids. They are one of the few aliens humans have contacted that have little to do with the Star Alliance.",
        pageLink: {
            name: "Locanus",
            link: `/wiki/${WikiArticleLinks.SPECIES_LOCANUS}`
        },
        featName: "Keen Sight",
        featDescription: "Gain a d6 bonus on attacks against targets that are not in the same zone or an adjacent zone.",
    },
    {
        name: "Pawnian",
        description: "Grey-skinned, monkey-like humanoids with long, monkey-like tails.",
        pageLink: {
            name: "Pawnian",
            link: `/wiki/${WikiArticleLinks.SPECIES_PAWNIANS}`
        },
        featName: "Adaptable",
        featDescription: "Pick any non-modular feat.",
    },
    {
        name: "Rhazak",
        description: "Dragon-like humanoids who are violent in nature, but follow some codes of honor.",
        pageLink: {
            name: "Rhazak",
            link: `/wiki/${WikiArticleLinks.SPECIES_RHAZAK}`
        },
        featName: "Breath Weapon",
        featDescription: "Gain a d6 bonus on attacks against targets that are in an adjacent zone.",
    },
    {
        name: "Urzi",
        description: "Large, bear-like people.",
        pageLink: {
            name: "Urzi",
            link: `/wiki/${WikiArticleLinks.SPECIES_URZI}`
        },
        featName: "Thick Hide",
        featDescription: "Gain a d6 bonus on Defense checks when all attacks are in the same or adjacent zones.",
    },
    {
        name: "Velki",
        description: "Deer-like humanoids with thick exoskin resembling skulls, small antlers, and hooved feet.",
        pageLink: {
            name: "Velki",
            link: `/wiki/${WikiArticleLinks.SPECIES_VELKI}`
        },
        featName: "Nimble Footed",
        featDescription: "Gain one free movement per turn.",
    },
    {
        name: "Vrants",
        description: "A group of humans altered themselves genetically, making all their descendants superhuman. They have black eyes with brightly colored irises and travel in groups of nomads.",
        pageLink: {
            name: "Vrants",
            link: `/wiki/${WikiArticleLinks.SPECIES_VRANTS}`
        },
        featName: "Modular Feat: Modified",
        featDescription: "Also able to gain the Advanced version at level 3 and Mastery version at level 6.",
    },
    {
        name: "Zivren",
        description: "Small, badger- or weasel-like humanoids.",
        pageLink: {
            name: "Zivren",
            link: `/wiki/${WikiArticleLinks.SPECIES_ZIVREN}`
        },
        featName: "Scurry",
        featDescription: "Gain a d6 bonus on Defense checks when all attacks are not in the same zone.",
    }
];