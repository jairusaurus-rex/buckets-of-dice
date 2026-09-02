export type FeatType = {
    id: string;
    name: string;
    description: string;
    species?: string;
    specialDiceName?: string;
    specialDiceRank?: number;
    advanced?: FeatType;
    mastery?: FeatType;
    
}