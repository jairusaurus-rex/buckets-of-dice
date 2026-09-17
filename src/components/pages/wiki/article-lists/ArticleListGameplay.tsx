import type { ArticleListType } from "../../../../data-types/types/AticleListType.ts";
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum.tsx";
import { lazy } from "react";

const RollingDiceArticle = lazy(() =>
    import("../articles/gameplay/RollingDiceArticle.tsx").then((module) => ({
        default: module.RollingDiceArticle,
    }))
);

export const ArticleListGameplay: ArticleListType = {
    id: WikiArticleLinks.GAMEPLAY,
    title: "Gameplay",
    children: [
        {
            id: WikiArticleLinks.GAMEPLAY_ROLLING_DICE,
            title: "The Basics",
            component: RollingDiceArticle,
        },
    ],
};