// Write your helper functions here!
require('isomorphic-fetch');
//Here is the HTML formatting for our mission target div.
function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTargetText = document.getElementById("missionTarget");
    missionTargetText.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `;   
}

function validateInput(testInput) {
    let inputReturn = ""
    let emptyReturn = ""
    let inputNumber = Number(testInput);
    if (testInput === "") {
        emptyReturn = "Empty";
        return emptyReturn;
    } else if (!isNaN(inputNumber)) {
        inputReturn = "Is a Number"
        return inputReturn;
    } else {
        inputReturn = "Not a Number"
        return inputReturn;
    }
}


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus")

    let pilotChecker = false;
    let levelChecker = false;
    let emptyChecker = false;
    if ((validateInput(pilot) === "Empty") || (validateInput(copilot) === "Empty") || (validateInput(fuelLevel) === "Empty") || (validateInput(cargoLevel) === "Empty")) {
        emptyChecker === true;
    }
    if ((validateInput(pilot) === "Is a Number") || (validateInput(copilot) === "Is a Number")) {
        pilotChecker = false;
    } else if ((validateInput(pilot) === "Not a Number") && (validateInput(copilot) === "Not a Number")) {
        pilotChecker = true;
    }
    if ((validateInput(fuelLevel) === "Not a Number") || (validateInput(cargoLevel) === "Not a Number")) {
        levelChecker = false;
    } else if ((validateInput(fuelLevel) === "Is a Number") && (validateInput(cargoLevel) === "Is a Number")) {
        levelChecker = true;
    }
    //
    //
    //
    if (emptyChecker === true) {
        window.alert("All fields require user input.");
        list.style.visibility = "hidden";
    } else if ((pilotChecker === false) || (levelChecker === false)) {
        window.alert("All fields require valid inputs, please check and try again.");
        list.style.visibility = "hidden";
    } else {
        let launchStatusText = document.getElementById("launchStatus");
        list.style.visibility = "visible";
        launchStatusText.style.color = 'rgb(65, 159, 106)';
        launchStatusText.innerHTML = `Shuttle is Ready For Launch`
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;        
        copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;        
        if (fuelLevel >= 10000) {
            fuelStatus.innerHTML = `Fuel level high enough for launch`;
        } else {
            launchStatusText.style.color = 'rgb(199, 37, 78)';
            launchStatusText.innerHTML = `Shuttle Not Ready for Launch`
            fuelStatus.innerHTML = `Fuel level too low for launch`;
        }
        if (cargoLevel <= 10000) {
            cargoStatus.innerHTML = `Cargo mass low enough for launch`;
        } else {
            launchStatusText.style.color = 'rgb(199, 37, 78)';
            launchStatusText.innerHTML = `Shuttle Not Ready for Launch`
            cargoStatus.innerHTML = `Cargo mass too heavy for launch`;
        }
    }
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
        return response.json();
    })
    return planetsReturned;
}

function pickPlanet(planets) {
    let randomPlanet = Math.floor(Math.random() * planets.length)
    return planets[randomPlanet];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch; 
