
import type { ArticleListType } from "../../../../data-types/types/AticleListType.ts";
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum.tsx";
import { lazy } from "react";
import augments from "../../../../assets/images/art/augments.webp";
import compainion from "../../../../assets/images/art/compainion.webp";
import cybernetics from "../../../../assets/images/art/cybernetics.webp";
import feats from "../../../../assets/images/art/feats.webp";
import levelup from "../../../../assets/images/art/levelup.webp";
import psionic from "../../../../assets/images/art/psionic.webp";

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
    articleImage: levelup,
    children: [
        {
            id: WikiArticleLinks.LEVELING_FEATS,
            title: "Feat List",
            component: FeatListArticle,
            articleImage: feats,
        },
        {
            id: WikiArticleLinks.LEVELING_MODULAR_AUGMENTS,
            title: "Modular Augments",
            component: ModularAugmentsArticle,
            articleImage: augments
        },
        {
            id: WikiArticleLinks.LEVELING_MODULAR_COMPANION,
            title: "Modular Companion",
            component: ModularCompanionArticle,
            articleImage: compainion
        },
        {
            id: WikiArticleLinks.LEVELING_MODULAR_CYBERNETICS,
            title: "Modular Cybernetics",
            component: ModularCyberneticsArticle,
            articleImage: cybernetics,
        },
        {
            id: WikiArticleLinks.LEVELING_MODULAR_PSIONICS,
            title: "Modular Psionics",
            component: ModularPsionicsArticle,
            articleImage: psionic
        }
    ]
};