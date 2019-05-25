// Word Bank
const fruits = [
    {
        name: "apples",
        photo: "http://www.benedikttrading.com/wp-content/uploads/2018/06/Fresh-apple-fuji-with-good-delicious-for.jpg"
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
    },
    {
        name: "lemon",
        photo: ""
    }
];

// Declaring Global Variables
let wordGuess = [];
let lettersGuessed = [];
let guessesLeft = 12;
let wins = 0;
let losses = 0;

// Picks a random fruit object from the array
let randomFruit = fruits[Math.floor(Math.random() * fruits.length)]
console.log(randomFruit.name);

let fruit = randomFruit.name;
console.log(fruit)
let fruitPhoto = randomFruit.photo;


// User input
document.onkeyup = (event) => {

    let userGuess = event.key;
    console.log(userGuess);

    for (let i = 0; i < fruit.length; i++) {

        wordGuess[i] = "_";
    }
    console.log(wordGuess)
}