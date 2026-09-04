import type { ArticleListType } from "../../../../data-types/types/AticleListType.ts";
import { WikiArticleLinks } from "../../../../data-types/enums/wiki-article-enum.tsx";
import { lazy } from "react";
import bekArt from "../../../../assets/images/art/bek.webp";
import chyraxArt from "../../../../assets/images/art/chyrax.webp";
import drakariArt from "../../../../assets/images/art/drakari.webp";
import driodArt from "../../../../assets/images/art/driod.webp";
import empianArt from "../../../../assets/images/art/empian.webp";
import feyraArt from "../../../../assets/images/art/feyra.webp";
import flonaArt from "../../../../assets/images/art/flona.webp";
import humansArt from "../../../../assets/images/art/human.webp";
import locanusArt from "../../../../assets/images/art/locanus.webp";
import pawnianArt from "../../../../assets/images/art/pawnian.webp";
import rhazakArt from "../../../../assets/images/art/rhazak.webp";
import urziArt from "../../../../assets/images/art/urzi.webp";
import velkiArt from "../../../../assets/images/art/velki.webp";
import vrantsArt from "../../../../assets/images/art/vrant.webp";
import zevrinArt from "../../../../assets/images/art/zivren.webp";

const SpeciesMain = lazy(() =>
    import("../articles/species/SpeciesMainArticle.tsx").then((module) => ({
        default: module.SpeciesMain,
    }))
);

const BekArticle = lazy(() =>
    import("../articles/species/BekArticle.tsx").then((module) => ({
        default: module.BekArticle,
    }))
);

const ChyraxArticle = lazy(() =>
    import("../articles/species/ChyraxArticle.tsx").then((module) => ({
        default: module.ChyraxArticle,
    }))
);

const DrakariArticle = lazy(() =>
    import("../articles/species/DrakariArticle.tsx").then((module) => ({
        default: module.DrakariArticle,
    }))
);

const DroidsArticle = lazy(() =>
    import("../articles/species/DroidsArticle.tsx").then((module) => ({
        default: module.DroidsArticle,
    }))
);

const EmpianArticle = lazy(() =>
    import("../articles/species/EmpianArticle.tsx").then((module) => ({
        default: module.EmpianArticle,
    }))
);

const FeyraArticle = lazy(() =>
    import("../articles/species/FeyraArticle.tsx").then((module) => ({
        default: module.FeyraArticle,
    }))
);

const FlonaArticle = lazy(() =>
    import("../articles/species/FlonaArticle.tsx").then((module) => ({
        default: module.FlonaArticle,
    }))
);

const HumansArticle = lazy(() =>
    import("../articles/species/HumansArticle.tsx").then((module) => ({
        default: module.HumansArticle,
    }))
);

const LocanusArticle = lazy(() =>
    import("../articles/species/LocanusArticle.tsx").then((module) => ({
        default: module.LocanusArticle,
    }))
);

const PawniansArticle = lazy(() =>
    import("../articles/species/PawniansArticle.tsx").then((module) => ({
        default: module.PawniansArticle,
    }))
);

const RhazakArticle = lazy(() =>
    import("../articles/species/RhazakArticle.tsx").then((module) => ({
        default: module.RhazakArticle,
    }))
);

const UrziArticle = lazy(() =>
    import("../articles/species/UrziArticle.tsx").then((module) => ({
        default: module.UrziArticle,
    }))
);

const VelkiArticle = lazy(() =>
    import("../articles/species/VelkiArticle.tsx").then((module) => ({
        default: module.VelkiArticle,
    }))
);

const VrantsArticle = lazy(() =>
    import("../articles/species/VrantsArticle.tsx").then((module) => ({
        default: module.VrantsArticle,
    }))
);

const ZivrenArticle = lazy(() =>
    import("../articles/species/ZivrenArticle.tsx").then((module) => ({
        default: module.ZivrenArticle,
    }))
);

export const ArticleListSpecies: ArticleListType = {
    id: WikiArticleLinks.SPECIES,
    title: "Species",
    component: SpeciesMain,
    children: [
        {
            id: WikiArticleLinks.SPECIES_BEK,
            title: "Bek",
            component: BekArticle,
            articleImage: bekArt,
        },
        {
            id: WikiArticleLinks.SPECIES_CHYRAX,
            title: "Chyrax",
            component: ChyraxArticle,
            articleImage: chyraxArt,
        },
        {
            id: WikiArticleLinks.SPECIES_DRKARI,
            title: "Drakari",
            component: DrakariArticle,
            articleImage: drakariArt,
        },
        {
            id: WikiArticleLinks.SPECIES_DROIDS,
            title: "Droids",
            component: DroidsArticle,
            articleImage: driodArt,
        },
        {
            id: WikiArticleLinks.SPECIES_EMPIANS,
            title: "Empians",
            component: EmpianArticle,
            articleImage: empianArt,
        },
        {
            id: WikiArticleLinks.SPECIES_FEYRA,
            title: "Feyra",
            component: FeyraArticle,
            articleImage: feyraArt,
        },
        {
            id: WikiArticleLinks.SPECIES_FLONA,
            title: "Flona",
            component: FlonaArticle,
            articleImage: flonaArt,
        },
        {
            id: WikiArticleLinks.SPECIES_HUMANS,
            title: "Humans",
            component: HumansArticle,
            articleImage: humansArt,
        },
        {
            id: WikiArticleLinks.SPECIES_LOCANUS,
            title: "Locanus",
            component: LocanusArticle,
            articleImage: locanusArt,
        },
        {
            id: WikiArticleLinks.SPECIES_PAWNIANS,
            title: "Pawnians",
            component: PawniansArticle,
            articleImage: pawnianArt,
        },
        {
            id: WikiArticleLinks.SPECIES_RHAZAK,
            title: "Rhazak",
            component: RhazakArticle,
            articleImage: rhazakArt,
        },
        {
            id: WikiArticleLinks.SPECIES_URZI,
            title: "Urzi",
            component: UrziArticle,
            articleImage: urziArt,
        },
        {
            id: WikiArticleLinks.SPECIES_VELKI,
            title: "Velki",
            component: VelkiArticle,
            articleImage: velkiArt,
        },
        {
            id: WikiArticleLinks.SPECIES_VRANTS,
            title: "Vrants",
            component: VrantsArticle,
            articleImage: vrantsArt,
        },
        {
            id: WikiArticleLinks.SPECIES_ZIVREN,
            title: "Zivren",
            component: ZivrenArticle,
            articleImage: zevrinArt,
        },
    ],
};