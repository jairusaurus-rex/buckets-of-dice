export const WikiArticleLinks= {
  WELCOME: "welcome",
    GETTING_STARTED: "getting-started",
    CHARACTER_CREATION: "character-creation",
    SKILLS: "skills",
    COMBAT: "combat",
    SPECIES: "species",
    SPECIES_HUMANS: "species-humans",
    SPECIES_DROIDS: "species-droids",
    GEAR: "gear",
    GEAR_SUIT: "gear-suit",
    GEAR_NON_SUIT: "gear-non-suit",
    LEVELING: "leveling",
    SPECIES_BEK: "species-bek",
    SPECIES_CHYRAX: "species-chyrax",
    SPECIES_DRKARI: "species-drakari",  
} as const;

export type WikiArticleLinkEnum = typeof WikiArticleLinks[keyof typeof WikiArticleLinks];
