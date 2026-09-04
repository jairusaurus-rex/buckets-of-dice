
import type { ArticleListType } from "../../../../data-types/types/AticleListType.ts";
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum.tsx";
import { lazy } from "react";

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
    import("../articles/leveling/ModularArticle.tsx").then(({ ModularArticle }) => ({
        default: () => <ModularArticle featId="modular-augments" />,
    }))
);
const ModularCompanionArticle = lazy(() =>
    import("../articles/leveling/ModularArticle.tsx").then(({ ModularArticle }) => ({
        default: () => <ModularArticle featId="modular-companion" />,
    }))
);
const ModularCyberneticsArticle = lazy(() =>
    import("../articles/leveling/ModularArticle.tsx").then(({ ModularArticle }) => ({
        default: () => <ModularArticle featId="modular-cybernetics" />,
    }))
);
const ModularPsionicsArticle = lazy(() =>
    import("../articles/leveling/ModularArticle.tsx").then(({ ModularArticle }) => ({
        default: () => <ModularArticle featId="modular-psionics" /> ,
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
        {
            id: WikiArticleLinks.LEVELING_MODULAR_CYBERNETICS,
            title: "Modular Cybernetics",
            component: ModularCyberneticsArticle,
        },
        {
            id: WikiArticleLinks.LEVELING_MODULAR_PSIONICS,
            title: "Modular Psionics",
            component: ModularPsionicsArticle,
        }
    ]
};