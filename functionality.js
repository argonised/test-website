let moddedText = "let's go!"
 function addExc() {
    moddedText = moddedText + "!"
    document.getElementById("btn-exc").textContent = moddedText
}

let homeScore = 0
let awayScore = 0

function homePlusOne() {
    homeScore += 1
    document.getElementById("home-score").textContent = homeScore
}
function awayPlusOne() {
    awayScore += 1
    document.getElementById("away-score").textContent = awayScore
}
function homePlusTwo() {
    homeScore += 2
    document.getElementById("home-score").textContent = homeScore
}
function awayPlusTwo() {
    awayScore += 2
    document.getElementById("away-score").textContent = awayScore
}
function homePlusThree() {
    homeScore += 3
    document.getElementById("home-score").textContent = homeScore
}
function awayPlusThree() {
    awayScore += 3
    document.getElementById("away-score").textContent = awayScore
}
function reset() {
    homeScore = 0
    document.getElementById("home-score").textContent = homeScore
    awayScore = 0
    document.getElementById("away-score").textContent = awayScore
}