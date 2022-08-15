const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lower = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const cbHigher = document.querySelector("#higher")
const cbLower = document.querySelector("#lower")
const cbNumber = document.querySelector("#numbers")
const cbSymbol = document.querySelector("#symbols")

let fieldOne = document.getElementById("one")
let fieldTwo = document.getElementById("two")

function generate() {
    let characters = []

    if (cbHigher.checked) {
        characters.push.apply(characters, upper)
    }
    if (cbLower.checked) {
        characters.push.apply(characters, lower)
    }
    if (cbNumber.checked) {
        characters.push.apply(characters, numbers)
    }
    if (cbSymbol.checked) {
        characters.push.apply(characters, symbols)
    }
    if (characters.length === 0) {
        return "";
    }
    
    fieldOne.value = ""
    fieldTwo.value = ""
    for (let i = 0; i < 16; i++) {
        passOne = Math.floor(Math.random()* characters.length)
        passTwo = Math.floor(Math.random()* characters.length)
        fieldOne.value += characters[passOne]
        fieldTwo.value += characters[passTwo]
    }
}

