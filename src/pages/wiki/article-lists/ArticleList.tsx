
import { WikiArticleLinks } from "../../../data-types/enums/wiki-article-enum.tsx";
import type { ArticleListType } from "../../../data-types/types/AticleListType.ts";
import { CharacterCreationArticle } from "../articles/CharacterCreationArticle.tsx";
import { SkillsArticle } from "../articles/SkillsArticle.tsx";
import { WelcomeArticle } from "../articles/WelcomeArticle.tsx";
import { ArticleListSpecies } from "./ArticleListSpecies.tsx";

export const ArticleList: ArticleListType[] = [
    /*{
        id: WikiArticleLinks.WELCOME,
        title: "Welcome",
        content: <WelcomeArticle />,
    },*/
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
    ArticleListSpecies,
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
