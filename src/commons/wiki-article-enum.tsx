export const WikiArticleLinks= {
  WELCOME: "welcome",
    GETTING_STARTED: "getting-started",
    CHARACTER_CREATION: "character-creation",
    SKILLS: "skills",
    COMBAT: "combat",
    SPECIES: "species",
    SPECIES_HUMANS: "species-humans",
    SPECIES_DROIDS: "species-droids",
} as const;

export type WikiArticleLinkEnum = typeof WikiArticleLinks[keyof typeof WikiArticleLinks];
