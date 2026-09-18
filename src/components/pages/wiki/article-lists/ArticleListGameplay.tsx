import type { ArticleListType } from "../../../../data-types/types/AticleListType.ts";
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum.tsx";
import { lazy } from "react";
import rolled_dice from "../../../../assets/images/art/rolled_dice.webp";

const RollingDiceArticle = lazy(() =>
    import("../articles/gameplay/RollingDiceArticle.tsx").then((module) => ({
        default: module.RollingDiceArticle,
    }))
);

const BuildingDicePoolsArticle = lazy(() =>
    import("../articles/gameplay/BuildingDicePoolsArticle.tsx").then((module) => ({
        default: module.BuildingDicePoolsArticle,
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
            articleImage: rolled_dice,
        },
        {
            id: WikiArticleLinks.GAMEPLAY_BUILDING_DICE_POOLS,
            title: "Building a Dice Pool",
            component: BuildingDicePoolsArticle,
        },
    ],
};