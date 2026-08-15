export const WikiArticleLinks= {
  WELCOME: "welcome",
    GETTING_STARTED: "getting-started",
    CHARACTER_CREATION: "character-creation",
    SKILLS: "skills",
    COMBAT: "combat",
    SPECIES: "species",
    GEAR: "gear",
    GEAR_SUIT: "gear-suit",
    GEAR_NON_SUIT: "gear-non-suit",
    LEVELING: "leveling",
    SPECIES_BEK: "species-bek",
    SPECIES_CHYRAX: "species-chyrax",
    SPECIES_DRKARI: "species-drakari", 
    SPECIES_DROIDS: "species-droids",
    SPECIES_EMPIANS: "species-empians",
    SPECIES_HUMANS: "species-humans",
} as const;

export type WikiArticleLinkEnum = typeof WikiArticleLinks[keyof typeof WikiArticleLinks];
