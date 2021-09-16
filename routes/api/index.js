const express = require('express')
const router = express.Router()

const { addCharacters, getCharacters } = require("../../controllers/characters");

router.get("/characters", function (req, res) {
    return res.json(getCharacters());
});

// Displays a single character, or returns false
router.get("/characters/:character", function (req, res) {
    const chosen = req.params.character;
    const characters = getCharacters();

    for (let i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }

    return res.json(false);
});



// Create New Characters - takes in JSON input
router.post("/characters", function (req, res) {
    var newCharacter = req.body;

    // Using regular expressions to globally remove spaces from the character name
    // Setting to lower case for consistency
    newCharacter.routeName = newCharacter.name.replace(/\s+/g, "").toLowerCase();

    // Add to our character array
    addCharacter(newCharacter);

    return res.json(newCharacter);
});

module.exports = router;