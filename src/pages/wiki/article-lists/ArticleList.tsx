
import { WikiArticleLinks } from "../../../data-types/enums/wiki-article-enum.tsx";
import type { ArticleListType } from "../../../data-types/types/AticleListType.ts";
import { CharacterCreationArticle } from "../articles/CharacterCreationArticle.tsx";
import { SkillsArticle } from "../articles/SkillsArticle.tsx";
import { ArticleListGear } from "./ArticleListGear.tsx";
import { ArticleListSpecies } from "./ArticleListSpecies.tsx";
import character_creation from "../../../assets/images/art/character_creation.png";
export const ArticleList: ArticleListType[] = [
    /*{
        id: WikiArticleLinks.WELCOME,
        title: "Welcome",
        content: <WelcomeArticle />,
    },*/
    {
        id: WikiArticleLinks.CHARACTER_CREATION,
        title: "Character Creation",
        content: <CharacterCreationArticle />,
        articleImage: character_creation,
    },
    {
        id: WikiArticleLinks.SKILLS,
        title: "Skills",
        content: <SkillsArticle />
    },
    ArticleListSpecies,
    ArticleListGear,
    {
        id: WikiArticleLinks.LEVELING,
        title: "Leveling",
        content: <div>Leveling content goes here.</div>
    }
];
