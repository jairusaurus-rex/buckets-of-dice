
import type { ArticleListType } from "../../../../data-types/types/AticleListType.ts";
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum.tsx";
import { lazy } from "react";
import accent from "../../../../assets/images/art/accent.webp";
import benchone from "../../../../assets/images/art/benchone.webp";
import benchtwo from "../../../../assets/images/art/benchtwo.webp";
import starsuit from "../../../../assets/images/art/starsuit.webp";


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
    articleImage: benchone,
    children: [
        {
            id: WikiArticleLinks.GEAR_SUIT,
            title: "Suit Gear",
            component: SuitGearArticle,
            articleImage: starsuit,
        },
        {
            id: WikiArticleLinks.GEAR_SUIT_ACCENT,
            title: "Suit Accents",
            component: SuitAccentArticle,
            articleImage: accent,
        },
        {
            id: WikiArticleLinks.GEAR_NON_SUIT,
            title: "Gear (Non Suit)",
            component: NonSuitGearArticle,
            articleImage: benchtwo,
        },
    ],
};