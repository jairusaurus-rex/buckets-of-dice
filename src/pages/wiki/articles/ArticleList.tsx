
import { CharacterCreationArticle } from "./CharacterCreationArticle.tsx";

export const articleList = [
    {
        id: "welcome",
        title: "Welcome",
        content: <div>Welcome to the Buckets of Dice wiki!</div>,
    },
    { 
        id: "getting-started",
        title: "Getting Started", 
        content: <div>Getting Started content goes here.</div> 
    },
    { 
        id: "character-creation",
        title: "Character Creation", 
        content: <CharacterCreationArticle /> 
    },
    { 
        id: "skills",
        title: "Skills", 
        content: <div>Skills content goes here.</div> 
    },
    { 
        id: "combat",
        title: "Combat", 
        content: <div>Combat content goes here.</div> 
    },
    { 
        id: "species",
        title: "Species", 
        content: <div>Species content goes here.</div>,
        children: [
            { 
                id: "species-humans",
                title: "Humans", 
                content: <div>Humans content goes here.</div> 
            },
            { 
                id: "species-elves",
                title: "Elves", 
                content: <div>Elves content goes here.</div> 
            },
            { 
                id: "species-dwarves",
                title: "Dwarves", 
                content: <div>Dwarves content goes here.</div> 
            },
        ]
    },
    { 
        id: "equipment",
        title: "Equipment", 
        content: <div>Equipment content goes here.</div> 
    },
];
