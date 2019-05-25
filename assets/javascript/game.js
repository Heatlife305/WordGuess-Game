// Word Bank
const fruits = [
    {
        name: "apple",
        photo: ""
    },
    {
        name: "pineapple",
        photo: ""
    },
    {
        name: "orange",
        photo: ""
    },
    {
        name: "strawberry",
        photo: ""
    },
    {
        name: "mango",
        photo: ""
    },
    {
        name: "kiwi",
        photo: ""
    },
    {
        name: "blueberry",
        photo: ""
    },
    {
        name: "coconut",
        photo: ""
    },
    {
        name: "watermelon",
        photo: ""
    }
];

// Declaring Global Variables
let wordGuess = [];
let lettersGuessed = [];
let guessesLeft = 12;
let wins = 0;
let losses = 0;

let randomFruit = fruits[Math.floor(Math.random() * fruits.length)]
console.log(randomFruit.name);

document.onkeyup = (event) => {

    let userGuess = event.key;
    console.log(userGuess);

}