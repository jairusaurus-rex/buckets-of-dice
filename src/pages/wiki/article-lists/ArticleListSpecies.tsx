
import { WikiArticleLinks } from "../../../data-types/enums/wiki-article-enum.tsx";
import type { ArticleListType } from "../../../data-types/types/AticleListType.ts";
import { BekArticle } from "../articles/species/BekArticle.tsx";
import { ChyraxArticle } from "../articles/species/ChyraxArticle.tsx";
import { DrakariArticle } from "../articles/species/DrakariArticle.tsx";
import { DroidsArticle } from "../articles/species/DroidsArticle.tsx";
import { EmpianArticle } from "../articles/species/EmpianArticle.tsx";
import { FeyraArticle } from "../articles/species/FeyraArticle.tsx";
import { FlonaArticle } from "../articles/species/FlonaArticle.tsx";
import { HumansArticle } from "../articles/species/HumansArticle.tsx";
import { LocanusArticle } from "../articles/species/LocanusArticle.tsx";
import { PawniansArticle } from "../articles/species/PawniansArticle.tsx";
import { RhazakArticle } from "../articles/species/RhazakArticle.tsx";
import { SpeciesMain } from "../articles/species/SpeciesMainArticle.tsx";
import { UrziArticle } from "../articles/species/UrziArticle.tsx";
import { VelkiArticle } from "../articles/species/VelkiArticle.tsx";
import { VrantsArticle } from "../articles/species/VrantsArticle.tsx";
import { ZivrenArticle } from "../articles/species/ZivrenArticle.tsx";

export const ArticleListSpecies: ArticleListType= 
    {
        id: WikiArticleLinks.SPECIES,
        title: "Species",
        content: <SpeciesMain />,
        children: [
            {
                id: WikiArticleLinks.SPECIES_BEK,
                title: "Bek",
                content: <BekArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_CHYRAX,
                title: "Chyrax",
                content: <ChyraxArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_DRKARI,
                title: "Drakari",
                content: <DrakariArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_DROIDS,
                title: "Droids",
                content: <DroidsArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_EMPIANS,
                title: "Empians",
                content: <EmpianArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_FEYRA,
                title: "Feyra",
                content: <FeyraArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_FLONA,
                title: "Flona",
                content: <FlonaArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_HUMANS,
                title: "Humans",
                content: <HumansArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_LOCANUS,
                title: "Locanus",
                content: <LocanusArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_PAWNIANS,
                title: "Pawnians",
                content: <PawniansArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_RHAZAK,
                title: "Rhazak",
                content: <RhazakArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_URZI,
                title: "Urzi",
                content: <UrziArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_VELKI,
                title: "Velki",
                content: <VelkiArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_VRANTS,
                title: "Vrants",
                content: <VrantsArticle />
            },
            {
                id: WikiArticleLinks.SPECIES_ZIVREN,
                title: "Zivren",
                content: <ZivrenArticle />
            },
        ]
    }