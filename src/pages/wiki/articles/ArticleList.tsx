
import { WikiArticleLinks } from "../../../commons/enums/wiki-article-enum.tsx";
import type { ArticleListType } from "../../../commons/types/AticleListType.ts";
import { CharacterCreationArticle } from "./CharacterCreationArticle.tsx";
import { SkillsArticle } from "./Skills.tsx";
import { BekArticle } from "./species/Bek.tsx";
import { ChyraxArticle } from "./species/Chyrax.tsx";
import { DrakariArticle } from "./species/Drakari.tsx";
import { DroidsArticle } from "./species/Droids.tsx";
import { EmpianArticle } from "./species/Empian.tsx";
import { FeyraArticle } from "./species/Feyra.tsx";
import { FlonaArticle } from "./species/Flona.tsx";
import { HumansArticle } from "./species/Humans.tsx";
import { LocanusArticle } from "./species/Locanus.tsx";
import { PawniansArticle } from "./species/Pawnians.tsx";
import { RhazakArticle } from "./species/Rhazak.tsx";
import { SpeciesMain } from "./species/SpeciesMain.tsx";
import { UrziArticle } from "./species/Urzi.tsx";
import { VelkiArticle } from "./species/Velki.tsx";
import { VrantsArticle } from "./species/Vrants.tsx";
import { ZivrenArticle } from "./species/Zivren.tsx";

export const articleList: ArticleListType[] = [
    {
        id: WikiArticleLinks.WELCOME,
        title: "Welcome",
        content: <div>Welcome to the Buckets of Dice wiki!</div>,
    },
    {
        id: WikiArticleLinks.CHARACTER_CREATION,
        title: "Character Creation",
        content: <CharacterCreationArticle />
    },
    {
        id: WikiArticleLinks.SKILLS,
        title: "Skills",
        content: <SkillsArticle />
    },
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
    },
    {
        id: WikiArticleLinks.GEAR,
        title: "Gear",
        content: <div>Equipment content goes here.</div>,
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
    },
    {
        id: WikiArticleLinks.LEVELING,
        title: "Leveling",
        content: <div>Leveling content goes here.</div>
    }
];
