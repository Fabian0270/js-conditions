//Lätta
//Hälsa användaren
//Skapa ett program som frågar efter användarens namn med prompt och sedan hälsar på dem i konsolen.

let userName = prompt("Vad heter du?");
console.log("Hej, " + userName + "!");

//Jämför två ord
//Be användaren mata in två ord och skriv ut vilket som kommer först i alfabetet.

let word1 = prompt("Skriv det första ordet:");
let word2 = prompt("Skriv det andra ordet:");

if (word1 < word2) {
    console.log(word1 + " kommer först i alfabetet.");
} else if (word1 > word2) {
    console.log(word2 + " kommer först i alfabetet.");
} else {
    console.log("Båda orden är lika.");
}

//Är användaren vuxen?
//Fråga användaren om deras ålder och skriv i konsolen om de är över eller under 18.

let age = prompt("Hur gammal är du?");

if (age >= 18) {
    console.log("Du är vuxen.");
} else {
    console.log("Du är inte vuxen.");
}

//Gissa ett djur
//Låt användaren gissa vilket djur du tänker på (t.ex. "katt"). Om de gissar rätt, visa ett meddelande om att de har rätt.

let correctAnimal = "katt";
let userGuess = prompt("Vilket djur tänker jag på?");

if (userGuess.toLowerCase() === correctAnimal) {
    console.log("Rätt! Du gissade rätt djur.");
} else {
    console.log("Fel! Jag tänkte på en " + correctAnimal + ".");
}