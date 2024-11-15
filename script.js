let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".resetBtn");
let newGame = document.querySelector(".newBtn");
let msgContainer = document.querySelector(".win-container");
let msg = document.querySelector(".msg");


let isDraw = true;
let turnO = true;  //playerX, player0

const winPatterns = [  //winning patterns
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
    
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("box clicked");
        if(turnO) {
            box.innerText = "O";
            box.classList.add("txtColor");
            turnO = false;
        } else {
            box.innerText = "X";
            box.classList.remove("txtColor");
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});


const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("txtColor");
    }
}


const disabledBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const showWinner = (winner) => {
    msg.innerText = `🎉Congratulations🎉\n Winner is player ${winner}`;
    msgContainer.classList.remove("hide");
    newGame.classList.add("glow");
    disabledBoxes();
    reset.disabled = true;
};


const checkWinner = () => {
    let isDraw = true;
    for(let pattern of winPatterns) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != "") {
            if(pos1 === pos2 && pos2 === pos3) {
                showWinner(pos1);
                return;
            }
        }
    }
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false; 
        }
    });

    if (isDraw) {
        showDraw(); 
    }
};


const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    reset.disabled = false;
    newGame.classList.remove("glow");
};

const showDraw = () => {
    msg.innerText = "🤝 Match Draw! Try Again!";
    msgContainer.classList.remove("hide");
    disabledBoxes();
    reset.disabled = true; 
};

newGame.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);

















































