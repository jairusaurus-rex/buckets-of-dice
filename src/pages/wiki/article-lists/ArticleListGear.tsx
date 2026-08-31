
import { lazy } from "react";
import { WikiArticleLinks } from "../../../data-types/enums/wiki-article-enum.tsx";
import type { ArticleListType } from "../../../data-types/types/AticleListType.ts";

const GearArticle = lazy(() =>
    import("../articles/Gear/GearMainArticle.tsx").then((module) => ({
        default: module.GearArticle,
    }))
);

const SuitGearArticle = () => <div>Equipment content goes here.</div>;
const NonSuitGearArticle = () => <div>Equipment content goes here.</div>;

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
            id: WikiArticleLinks.GEAR_NON_SUIT,
            title: "Gear (Non Suit)",
            component: NonSuitGearArticle,
        },
    ],
};