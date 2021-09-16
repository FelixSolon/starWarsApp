$(document).on("ready", () => {
    $("#add-btn").on("click", (event) => {
        event.preventDefault();
        const newCharacter = {
            name: $("#name").val().trim(),
            role: $("#role").val().trim(),
            age: $("#age").val().trim(),
            forcePoints: $("#force-points").val().trim()
        };

        $.post("/api/characters", newCharacter)
            .then((data) => {
                alert("Adding character...");
                window.location.href = `/view/${data.routeName}`;
            });
    });
})
