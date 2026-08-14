export const articleList = [
    {
        title: "Welcome",
        content: <div>Welcome to the Buckets of Dice wiki!</div>,
    },
    { title: "Getting Started", content: <div>Getting Started content goes here.</div> },
    { title: "Character Creation", content: <div>Character Creation content goes here.</div> },
    { title: "Skills", content: <div>Skills content goes here.</div> },
    { title: "Combat", content: <div>Combat content goes here.</div> },
    { title: "Species", content: <div>Species content goes here.</div>,
        children: [
            { title: "Humans", content: <div>Humans content goes here.</div> },
            { title: "Elves", content: <div>Elves content goes here.</div> },
            { title: "Dwarves", content: <div>Dwarves content goes here.</div> },
        ]
    },
    { title: "Equipment", content: <div>Equipment content goes here.</div> },
];
