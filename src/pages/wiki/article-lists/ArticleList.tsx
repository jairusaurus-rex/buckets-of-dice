
import { lazy } from "react";
import { WikiArticleLinks } from "../../../data-types/enums/wiki-article-enum.tsx";
import type { ArticleListType } from "../../../data-types/types/AticleListType.ts";
import { ArticleListGear } from "./ArticleListGear.tsx";
import { ArticleListSpecies } from "./ArticleListSpecies.tsx";
import character_creation from "../../../assets/images/art/character_creation.png";
import { ArticleListLeveling } from "./ArticleListLeveling.tsx";

const TheSpacerArticle = lazy(() =>
    import("../articles/TheSpacerArticle.tsx").then((module) => ({
        default: module.TheSpacerArticle,
    }))
);

const CharacterCreationArticle = lazy(() =>
    import("../articles/CharacterCreationArticle.tsx").then((module) => ({
        default: module.CharacterCreationArticle,
    }))
);

const SkillsArticle = lazy(() =>
    import("../articles/SkillsArticle.tsx").then((module) => ({
        default: module.SkillsArticle,
    }))
);

export const ArticleList: ArticleListType[] = [

    {
        id: WikiArticleLinks.THE_SPACER,
        title: "The Spacer",
        component: TheSpacerArticle,
    },
    {
        id: WikiArticleLinks.CHARACTER_CREATION,
        title: "Character Creation",
        component: CharacterCreationArticle,
        articleImage: character_creation,
    },
    {
        id: WikiArticleLinks.SKILLS,
        title: "Skills",
        component: SkillsArticle,
    },
    ArticleListSpecies,
    ArticleListGear,
    ArticleListLeveling,
];
