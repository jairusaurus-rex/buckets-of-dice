
import { lazy } from "react";
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum.tsx";
import type { ArticleListType } from "../../../../data-types/types/AticleListType.ts";

const GearArticle = lazy(() =>
    import("../articles/gear/GearMainArticle.tsx").then((module) => ({
        default: module.GearArticle,
    }))
);
const SuitGearArticle = lazy(() =>
    import("../articles/gear/SuitGearArticle.tsx").then((module) => ({
        default: module.SuitGearArticle,
    }))
);
const SuitAccentArticle = lazy(() =>
    import("../articles/gear/SuitAccentArticle.tsx").then((module) => ({
        default: module.SuitAccentArticle,
    }))
);
const NonSuitGearArticle = lazy(() =>
    import("../articles/gear/NonSuitGearArticle.tsx").then((module) => ({
        default: module.NonSuitGearArticle,
    }))
);

export const ArticleListGear: ArticleListType = {
    id: WikiArticleLinks.GEAR,
    title: "Gear",
    component: GearArticle,
    children: [
        {
            id: WikiArticleLinks.GEAR_SUIT,
            title: "Suit Gear",
            component: SuitGearArticle,
        },
        {
            id: WikiArticleLinks.GEAR_SUIT_ACCENT,
            title: "Suit Accents",
            component: SuitAccentArticle,
        },
        {
            id: WikiArticleLinks.GEAR_NON_SUIT,
            title: "Gear (Non Suit)",
            component: NonSuitGearArticle,
        },
    ],
};