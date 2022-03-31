function randomInt(max) {
    return Math.floor(Math.random() * max)
}

function calculateShiny(trID, srID, ppV) {
    return trID ^ srID ^ (ppV & 0xFFFF) ^ (ppV >>> 16)
}

let tID = 0                 // Trainer ID - 16 bit int
let sID = 0                 // Secret ID - 16 bit int
let pID = 0                 // Pokemon's Personality ID - 32 bit int
let pSV = 0                 // Pokemon Shiny Value
let shiny = 0               // Shiny Value, if shiny < 8 then the Pokemon is Shiny
let counter = 0             // How many times trough the loop?
let odds = 8                // Shiny odds, shiny < odds = shiny pokemon, defaults to 8 (gens 3-5) or 16 (gens 6-8)

tID = prompt("Trainer ID? 0-65535")
sID = prompt("Secret ID? 0-65535")
odds = prompt("Shiny odds? 8 for 1/8192, 16 for 1/4096. Max is 65535")

do {
    pID = randomInt(0xFFFFFFFF)
    shiny = calculateShiny(tID, sID, pID)
    counter++
    console.log("Encounter: " + counter)
    console.log("Shiny Value: " + shiny)
    console.log("")
} while(shiny >= odds)
console.log("shiny!")
if(shiny==0)
{console.log("square sparkles")
}