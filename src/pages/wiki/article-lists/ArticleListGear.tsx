
import { WikiArticleLinks } from "../../../data-types/enums/wiki-article-enum.tsx";
import type { ArticleListType } from "../../../data-types/types/AticleListType.ts";
import { GearArticle } from "../articles/Gear/GearMainArticle.tsx";

export const ArticleListGear: ArticleListType= 
    {
        id: WikiArticleLinks.GEAR,
        title: "Gear",
        content: <GearArticle />,
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
    }