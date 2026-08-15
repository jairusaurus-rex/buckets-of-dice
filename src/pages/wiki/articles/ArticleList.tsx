
import { WikiArticleLinks } from "../../../commons/enums/wiki-article-enum.tsx";
import type { ArticleListType } from "../../../commons/types/AticleListType.ts";
import { CharacterCreationArticle } from "./CharacterCreationArticle.tsx";
import { SkillsArticle } from "./Skills.tsx";
import { BekArticle } from "./species/Bek.tsx";
import { ChyraxArticle } from "./species/Chyrax.tsx";
import { DrakariArticle } from "./species/Drakari.tsx";
import { DroidsArticle } from "./species/Droids.tsx";
import { EmpianArticle } from "./species/Empian.tsx";
import { SpeciesMain } from "./species/SpeciesMain.tsx";

export const articleList: ArticleListType[] = [
    {
        id: WikiArticleLinks.WELCOME,
        title: "Welcome",
        content: <div>Welcome to the Buckets of Dice wiki!</div>,
    },
    {
        id: WikiArticleLinks.CHARACTER_CREATION,
        title: "Character Creation",
        content: <CharacterCreationArticle />
    },
    {
        id: WikiArticleLinks.SKILLS,
        title: "Skills",
        content: <SkillsArticle />
    },
    {
        id: WikiArticleLinks.SPECIES,
        title: "Species",
        content: <SpeciesMain />,
        children: [
            {
                id: WikiArticleLinks.SPECIES_BEK,
                title: "The Bek",
                content: <BekArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_CHYRAX,
                title: "The Chyrax",
                content: <ChyraxArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_DRKARI,
                title: "The Drakari",
                content: <DrakariArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_DROIDS,
                title: "Droids",
                content: <DroidsArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_EMPIANS,
                title: "Empians",
                content: <EmpianArticle />
            },
            
            {
                id: WikiArticleLinks.SPECIES_HUMANS,
                title: "Humans",
                content: <div>Humans content goes here.</div>
            },
            {
                id: "Vrants",
                title: "Vrants",
                content: <div>Vrants content goes here.</div>
            },
        ]
    },
    {
        id: WikiArticleLinks.GEAR,
        title: "Gear",
        content: <div>Equipment content goes here.</div>,
        children: [
            {
                id: WikiArticleLinks.GEAR_SUIT,
                title: "Suit Gear",
                content: <div>Equipment content goes here.</div>
            },
            {
                id: WikiArticleLinks.GEAR_NON_SUIT,
                title: "Gear (Non Suit)",
                content: <div>Equipment content goes here.</div>
            },
        ]
    },
    {
        id: WikiArticleLinks.LEVELING,
        title: "Leveling",
        content: <div>Leveling content goes here.</div>
    }
];
