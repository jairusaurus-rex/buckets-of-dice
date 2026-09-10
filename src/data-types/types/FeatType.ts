type FeatSubChoiceType = {
    id: string;
    name: string;
    description: string;
    tags?: string[];
}

type FeatExtraDescription = {
    lore: string;
    extraInfo: string[];
}

export type FeatType = {
    id: string;
    name: string;
    description: string;
    species?: string;
    specialDiceName?: string;
    specialDiceRank?: number;
    advanced?: FeatType;
    mastery?: FeatType;
    subChoices?: FeatSubChoiceType[];
    link?: string;
    extra?:FeatExtraDescription;
    tags?: string[];
}