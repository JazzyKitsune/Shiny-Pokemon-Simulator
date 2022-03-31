function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

let tID = prompt("Trainer ID? 0-65535 (0xFFFF)")    // Trainer ID - 16 bit int
let sID = prompt("Secret ID? 0-65535 (0xFFFF)")     // Secret ID - 16 bit int
 
console.log(tID)
console.log(sID)

let tSV = tID^sID
let pID = 0
let pSV = 0
let shiny = 0
let counter = 0

/* do {
    pID = getRandomInt(0xFFFFFFFF)
    pSV = (pID&0xFFFF)^(pID>>16)
    shiny = tSV^pSV
    console.log(shiny)
    counter++
    console.log(counter)
} while(shiny<8) */

pID = getRandomInt(0xFFFFFFFF)
console.log(pID)
console.log(pID & 0xFFFF)
console.log(pID >> 16)
pSV = (pID&0xFFFF)^(pID>>16)
console.log(pSV)
