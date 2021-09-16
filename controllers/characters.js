const fs = require("fs");
const path = require("path");

// using fs instead of just importing it in to keep up to date with writing and reading
const characterFilePath = path.join(__dirname, "..", "db", "characters.json");
let characters = [];

fs.readFile(characterFilePath, (err, data) => {
    if (err) throw err;
    characters = JSON.parse(data);
});

const addCharacter = (newCharacter) => {
    characters.push(newCharacter);
    fs.writeFile(characterFilePath, JSON.stringify(characters), "UTF8", (err) => {
        if (err) throwErr;
    });
    return characters;
}

const getCharacters = () => {
    return characters;
}

module.exports = {
    addCharacter,
    getCharacters,
}