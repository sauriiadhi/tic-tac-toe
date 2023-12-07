console.log("WELCOME TO TIC TAC TOE");
const music = new Audio("music.mp3");
const audioTurn = new Audio("ting.mp3");
const gameOver = new Audio("gameover.mp3");
let turn = 'X';
let isGameOver = false;

const turnChange = () => {
    return turn === 'X' ? 'O' : 'X'
}

const checkWin = () => {
    if (!isGameOver) {
        let boxtext = document.getElementsByClassName('boxtext');
        let wins = [
            [0, 1, 2, 5, 5, 0],
            [3, 4, 5, 5, 15, 0],
            [6, 7, 8, 5, 25, 0],
            [0, 3, 6, -5, 15, 90],
            [1, 4, 7, 5, 15, 90],
            [2, 5, 8, 15, 15, 90],
            [0, 4, 8, 5, 15, 45],
            [2, 4, 6, 5, 15, 135],
        ];
        wins.forEach(e => {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText) && (boxtext[e[0]].innerText !== "")) {
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + "  Won";
                isGameOver = true;
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = '200px';
                document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
                document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
                document.querySelector(".line").style.width = "20vw";
            }
        }
        )
    }

}

let boxes = document.getElementsByClassName('box');
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            audioTurn.play();
            boxtext.innerText = turn;
            turn = turnChange();
            checkWin();
            if (!isGameOver) {
                document.getElementsByClassName('info')[0].innerText = "TURN FOR: " + turn
            }
        }
    })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    isGameOver = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})


