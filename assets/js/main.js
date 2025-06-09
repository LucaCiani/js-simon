const gameTimeEl = document.getElementById("time");
const gameNumber1El = document.getElementById("number-1");
const gameNumber2El = document.getElementById("number-2");
const gameNumber3El = document.getElementById("number-3");
const gameNumber4El = document.getElementById("number-4");
const gameNumber5El = document.getElementById("number-5");
const gameButtonEl = document.getElementById("game-button");
const gameResult = document.getElementById("result");
let seconds = 30;

function random(min, max) {
    const randomNumber = Math.floor(Math.random() * max - min + 1) + 1;
    return randomNumber;
}

const emptyValue = () => {
    gameNumber1El.value = "";
    gameNumber2El.value = "";
    gameNumber3El.value = "";
    gameNumber4El.value = "";
    gameNumber5El.value = "";
};

const buttonVerify = () => {
    gameButtonEl.addEventListener("click", () => {
        userNumbers = [
            gameNumber1El.value,
            gameNumber2El.value,
            gameNumber3El.value,
            gameNumber4El.value,
            gameNumber5El.value,
        ];

        let numberCounter = 0;
        for (let i = 0; i < gameNumbers.length; i++) {
            if (gameNumbers.includes(userNumbers[i])) {
                numberCounter++;
            }
        }
        gameResult.innerText = `HAI INDOVINATO ${numberCounter} NUMERI`;
        emptyValue();
    });
};

gameNumber1El.value = random(1, 100);
gameNumber2El.value = random(1, 100);
gameNumber3El.value = random(1, 100);
gameNumber4El.value = random(1, 100);
gameNumber5El.value = random(1, 100);

const gameNumbers = [
    gameNumber1El.value,
    gameNumber2El.value,
    gameNumber3El.value,
    gameNumber4El.value,
    gameNumber5El.value,
];

let userNumbers = [];

const userInput = () => {
    gameNumber1El.removeAttribute("disabled");
    gameNumber2El.removeAttribute("disabled");
    gameNumber3El.removeAttribute("disabled");
    gameNumber4El.removeAttribute("disabled");
    gameNumber5El.removeAttribute("disabled");

    emptyValue();
};

const countdown = () => {
    if (seconds <= 0) {
        gameTimeEl.innerText = "Tempo Scaduto!";
        userInput();
        clearInterval(countdownInterval);
        buttonVerify();
    } else gameTimeEl.innerText = seconds--;
};

countdown();
const countdownInterval = setInterval(countdown, 1000);
