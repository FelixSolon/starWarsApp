$(document).on("ready", () => {
    // Grabbing the various DOM elements once to reduce overhead for multiple searches
    const characterSearch = $("#character-search");
    const nameDisplay = $("#name");
    const roleDisplay = $("#role");
    const ageDisplay = $("#age");
    const forcePointsDisplay = $("#force-points");
    const statsDisplay = $("#stats")

    const searchCharacter = (searchedCharacter) => {
        console.log(searchedCharacter);
        // Using regex to globally remove spaces from the character names
        // Then setting to lower case for consistency
        searchedCharacter = searchedCharacter.replace(/\s+/g, "").toLowerCase();
        console.log(searchedCharacter);
        $.get("/api/characters/" + searchedCharacter, (data) => {
            if (data) {
                nameDisplay.text(data.name);
                roleDisplay.text(data.role);
                ageDisplay.text(data.age);
                forcePointsDisplay.text(data.forcePoints);
                statsDisplay.show();
            } else {
                nameDisplay.text("The force is not strong with this one. Your character was not found.");
                statsDisplay.hide();
            }
        });
    }

    $("#search-btn").on("click", (event) => {
        event.preventDefault();
        let searchedCharacter = characterSearch.val().trim();

        searchCharacter(searchedCharacter);
    });

    // Decode the URL, then find the character from a path that looks like /view/Darth%20Maul
    const routeCharacter = decodeURI(window.location.pathname.split("/")[2]);
    if (routeCharacter) {
        searchCharacter(routeCharacter);
    }
})
