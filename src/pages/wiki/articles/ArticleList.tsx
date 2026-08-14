
import { WikiArticleLinks } from "../../../commons/enums/wiki-article-enum.tsx";
import type { ArticleListType } from "../../../commons/types/AticleListType.ts";
import { CharacterCreationArticle } from "./CharacterCreationArticle.tsx";

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
        content: <div>Skills content goes here.</div>
    },
    {
        id: WikiArticleLinks.SPECIES,
        title: "Species",
        content: <div>Species content goes here.</div>,
        children: [
            {
                id: WikiArticleLinks.SPECIES_HUMANS,
                title: "Humans",
                content: <div>Humans content goes here.</div>
            },
            
            {
                id: WikiArticleLinks.SPECIES_DROIDS,
                title: "Driods",
                content: <div>Driods content goes here.</div>
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
