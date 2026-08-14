
import { WikiArticleLinks } from "../../../commons/wiki-article-enum.tsx";
import { CharacterCreationArticle } from "./CharacterCreationArticle.tsx";

export const articleList = [
    {
        id: WikiArticleLinks.WELCOME,
        title: "Welcome",
        content: <div>Welcome to the Buckets of Dice wiki!</div>,
    },
    { 
        id: WikiArticleLinks.GETTING_STARTED,
        title: "Getting Started", 
        content: <div>Getting Started content goes here.</div> 
    },
    { 
        id: WikiArticleLinks.CHARACTER_CREATION,
        title: "Character Creation", 
        content: <CharacterCreationArticle /> 
    },
    { 
        id: WikiArticleLinks.SKILLS,
        title: "Skills", 
        content: <div>Skills content goes here.</div> 
    },
    { 
        id: WikiArticleLinks.COMBAT,
        title: "Combat", 
        content: <div>Combat content goes here.</div> 
    },
    { 
        id: WikiArticleLinks.SPECIES,
        title: "Species", 
        content: <div>Species content goes here.</div>,
        children: [
            { 
                id: WikiArticleLinks.SPECIES_HUMANS,
                title: "Humans", 
                content: <div>Humans content goes here.</div> 
            },
            { 
                id: WikiArticleLinks.SPECIES_DROIDS,
                title: "Driods", 
                content: <div>Driods content goes here.</div> 
            },
            
        ]
    },
    { 
        id: "equipment",
        title: "Equipment", 
        content: <div>Equipment content goes here.</div> 
    },
];
