
import { lazy } from "react";
import { WikiArticleLinks } from "../../../data-types/enums/wiki-article-enum.tsx";
import type { ArticleListType } from "../../../data-types/types/AticleListType.ts";

const LevelingArticle = lazy(() =>
    import("../articles/leveling/LevelingMainArticle.tsx").then((module) => ({
        default: module.LevelingArticle,
    }))
);
const FeatListArticle = lazy(() =>
    import("../articles/leveling/FeatListArticle.tsx").then((module) => ({
        default: module.FeatListArticle,
    }))
);
const ModularAugmentsArticle = lazy(() =>
    import("../articles/leveling/ModularAugmentsArticle.tsx").then((module) => ({
        default: module.ModularAugmentsArticle,
    }))
);  
const ModularCompanionArticle = lazy(() =>
    import("../articles/leveling/ModularCompanionArticle.tsx").then((module) => ({
        default: module.ModularCompanionArticle,
    }))
);

export const ArticleListLeveling: ArticleListType = {
    id: WikiArticleLinks.LEVELING,
    title: "Leveling Up",
    component: LevelingArticle,
    children: [
        {
            id: WikiArticleLinks.LEVELING_FEATS,
            title: "Feat List",
            component: FeatListArticle,
        },
        {
            id: WikiArticleLinks.LEVELING_MODULAR_AUGMENTS,
            title: "Modular Augments",
            component: ModularAugmentsArticle,
        },
        {
            id: WikiArticleLinks.LEVELING_MODULAR_COMPANION,
            title: "Modular Companion",
            component: ModularCompanionArticle,
        },
    ]
};