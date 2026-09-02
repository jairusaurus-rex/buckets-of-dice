
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

export const ArticleListLeveling: ArticleListType = {
    id: WikiArticleLinks.LEVELING,
    title: "Leveling Up",
    component: LevelingArticle,
    children: [
        {
            id: WikiArticleLinks.LEVELING_FEATS,
            title: "Feats",
            component: FeatListArticle,
        },
        {
            id: WikiArticleLinks.LEVELING_MODULAR_AUGMENTS,
            title: "Modular Augments",
            component: ModularAugmentsArticle,
        }
    ]
};