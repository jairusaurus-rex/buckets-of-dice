
import { WikiArticleLinks } from "../../../commons/enums/wiki-article-enum.tsx";
import type { ArticleListType } from "../../../commons/types/AticleListType.ts";
import { BekArticle } from "../articles/species/Bek.tsx";
import { ChyraxArticle } from "../articles/species/Chyrax.tsx";
import { DrakariArticle } from "../articles/species/Drakari.tsx";
import { DroidsArticle } from "../articles/species/Droids.tsx";
import { EmpianArticle } from "../articles/species/Empian.tsx";
import { FeyraArticle } from "../articles/species/Feyra.tsx";
import { FlonaArticle } from "../articles/species/Flona.tsx";
import { HumansArticle } from "../articles/species/Humans.tsx";
import { LocanusArticle } from "../articles/species/Locanus.tsx";
import { PawniansArticle } from "../articles/species/Pawnians.tsx";
import { RhazakArticle } from "../articles/species/Rhazak.tsx";
import { SpeciesMain } from "../articles/species/SpeciesMain.tsx";
import { UrziArticle } from "../articles/species/Urzi.tsx";
import { VelkiArticle } from "../articles/species/Velki.tsx";
import { VrantsArticle } from "../articles/species/Vrants.tsx";
import { ZivrenArticle } from "../articles/species/Zivren.tsx";

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