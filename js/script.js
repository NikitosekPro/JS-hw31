// Завдання "Таймер інтервалу": Створіть програму, яка виводить повідомлення кожну секунду за допомогою setInterval. 
// Після 5 повідомлень зупиніть виконання інтервалу за допомогою clearInterval.


let count = 0;

const timerId = setInterval(greet, 1000);

function greet() {
    count++;
    console.log("Hello");

    if (count === 5) {
        clearInterval(timerId);
    }
}


//Завдання "Анімація елементів": Створіть кілька елементів на сторінці і реалізуйте просту анімацію, 
// змінюючи їх розмір, положення чи стилі через певний інтервал за допомогою setInterval.


let box = document.querySelector(".box");


function getRandomHexColor() {
    return "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6,"0");
}


setInterval(() => {
    box.style.backgroundColor = getRandomHexColor();
}, 1000);




// Завдання "Інтерактивна гра": Створіть просту інтерактивну гру, де гравець має натискати на елементи на сторінціпротягом певного інтервалу часу,
// використовуючи setInterval. Реалізуйте лічильник очок та відслідковуйте кількість натисків гравця.



// Aim Trainer


    const target = document.querySelector(".target");
    const gameArea = document.querySelector("#game-area");
    const scoreEl = document.querySelector("#score");
    const timeEl = document.querySelector("#time");

    let score = 0;
    let timeLeft = 10;


    target.addEventListener("click", () => {
        score++;
        scoreEl.textContent = "Очки: " + score;
    });


    const moveInterval = setInterval(() => {
        const maxX = gameArea.clientWidth - target.clientWidth;
        const maxY = gameArea.clientHeight - target.clientHeight;
        target.style.left = Math.floor(Math.random() * maxX) + "px";
        target.style.top = Math.floor(Math.random() * maxY) + "px";
    }, 500);


    const timer = setInterval(() => {
        timeLeft--;
        timeEl.textContent = "Час: " + timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        clearInterval(moveInterval);
        target.style.display = "none";
        alert("Гру завершено! Твої очки: " + score);
    }
    }, 1000);





// Завдання "Контроль часу": Створіть програму, яка дозволяє користувачу встановити певний час (у секундах) за допомогою введення з клавіатури.
// Потім використовуйте setTimeout або setInterval, щоб після встановленого часу вивести повідомлення.






    const input = document.getElementById("timeInput");
    const button = document.getElementById("startBtn");
    const output = document.getElementById("output");

    button.addEventListener("click", () => {
        let seconds = parseInt(input.value);

        if (isNaN(seconds) || seconds <= 0) {
            output.textContent = "Будь ласка, введіть додатне число!";
            return;
        }

        output.textContent = `Очікуємо ${seconds} секунд...`;

        setTimeout(() => {
            output.textContent = "Час вийшов!";
        }, seconds * 1000);
    });

