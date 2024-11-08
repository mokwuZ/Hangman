const secretWords = ["mere", "jazz", "electronice", "elefant", "pamant"]
let indexWord = Math.floor(Math.random() * secretWords.length)
let healthPoints = 7
let numLettersFound = 0
console.log(secretWords[indexWord])
console.log(secretWords[indexWord].length)
document.getElementById('Word_area').innerHTML += `
    <h7 id="health">You have ${healthPoints} lives left</h7><br>
`
for (let i = 0; i < secretWords[indexWord].length; ++i) {
    document.getElementById('Word_area').innerHTML +=`
        <span id="${i}">_  </span>
    `
}

function searchLetter() {
    let letter = document.getElementById('input').value
    let foundLetter = 0
    for (let i = 0; i < secretWords[indexWord].length; ++i) {
        if (letter == secretWords[indexWord][i]) {
            document.getElementById(i).innerHTML = letter
            foundLetter = 1
            ++numLettersFound
        } 
    }
    if (foundLetter == 0) {
        --healthPoints
        document.getElementById('health').innerHTML = `
            <h7 id="health">You have ${healthPoints} lives left</h7>
        `
    } 
    console.log(numLettersFound)
    if (healthPoints <= 0) {
        document.getElementById('health').innerHTML = `
            <h7 id="health">Game over!</h7>
        `
    } else if (numLettersFound == secretWords[indexWord].length) {
        document.getElementById('health').innerHTML = `
            <h7 id="health">You Won!</h7>
        `
    }
}

