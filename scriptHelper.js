// Write your helper functions here!
// require('isomorphic-fetch');
//Here is the HTML formatting for our mission target div.
/* function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {   
    
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
   
} */

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

    let pilotChecker = false;    
    let levelChecker = false;
    let emptyChecker = false;   

    if ((validateInput(pilot)==="Empty")||(validateInput(copilot)==="Empty")||(validateInput(fuelLevel)==="Empty")||(validateInput(cargoLevel)==="Empty")){
        emptyChecker === true;
    }
    if ((validateInput(pilot)==="Is a Number")||(validateInput(copilot)==="Is a Number")){
        pilotChecker = false;
    } else if((validateInput(pilot)==="Not a Number")&&(validateInput(copilot)==="Not a Number")){
        pilotChecker = true;
    }
    if((validateInput(fuelLevel)==="Not a Number")||(validateInput(cargoLevel)==="Not a Number")){
        levelChecker = false;
    } else if((validateInput(fuelLevel)==="Is a Number")&&(validateInput(cargoLevel)==="Is a Number")){
        levelChecker = true;
    }

    //
    //
    //

    if(emptyChecker===true){
        window.alert("All fields require user input.");
    }
    if((pilotChecker===false)||(levelChecker===false)){
        window.alert("All fields require valid inputs, please check and try again.");        
    } 
    if((pilotChecker===true)&&(levelChecker===true)){
        const launchStatusText = document.getElementById("launchStatus")
        const pilotStatus = document.getElementById("pilotStatus");
        const copilotStatus = document.getElementById("copilotStatus");
        const fuelStatus = document.getElementById("fuelStatus");
        const cargoStatus = document.getElementById("cargoStatus");
        list.style.visibility = visible;
        launchStatusText.innerHTML(`Shuttle is Ready For Launch`)        
        pilotStatus.innerHTML(`${pilot}`);
        copilotStatus.innerHTML(`${copilot}`);        
        if (fuelLevel>10000){
            fuelStatus.innerHTML(`${fuelLevel}`);
        } else {
            fuelStatus.innerHTML(`Fuel level too low for launch`);
        }
        if (cargoLevel<10000){
            cargoStatus.innerHTML(`${cargoLevel}`);
        } else {
            cargoStatus.innerHTML(`Cargo mass too heavy for launch`);
        }
    }       
    

        
}

/* async function myFetch() {    
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then(function (response) {
    });

    return planetsReturned;
}

function pickPlanet(planets) {
} */

//module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch; 
