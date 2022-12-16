

// Write your JavaScript code here!
window.addEventListener("load", function () {

    /* let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse;
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
        console.log(listedPlanets);
    }).then(function () {
        console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
    }) */

    let form = document.getElementById("launchForm");
    form.addEventListener("submit", function (event) {

        event.preventDefault();

        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoLevel = document.querySelector("input[name=cargoLevel]");
        let list = document.getElementById("faultyItems");

        formSubmission(document, list, pilotName.value, copilotName.value, fuelLevel.value, cargoLevel.value);

        let listedPlanets;
        // Set listedPlanetsResponse equal to the value returned by calling myFetch()
        let listedPlanetsResponse = myFetch();
        listedPlanetsResponse.then(function (result) {
            listedPlanets = result;
            //console.log(listedPlanets);
        }).then(function () {
            //console.log(listedPlanets);
            let planetChoice = pickPlanet(listedPlanets);
            //console.log(planetChoice)
            addDestinationInfo(document, planetChoice.name, planetChoice.diameter, planetChoice.star, planetChoice.distance, planetChoice.moons, planetChoice.image)
        })


    })

});