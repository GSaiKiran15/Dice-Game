let headEl = document.getElementById("head");
let p1El = document.getElementById("p1");
let p2El = document.getElementById("p2");
const playerOneScore = Math.floor(Math.random() * 6) + 1;
const playerTwoScore = Math.floor(Math.random() * 6) + 1;
let dict = {
    1: "images/1.png",
    2: "images/2.png",
    3: "images/3.png",
    4: "images/4.png",
    5: "images/5.png",
    6: "images/6.png"
}
p1El.setAttribute("src", dict[playerOneScore])
p2El.setAttribute("src", dict[playerTwoScore])
if (playerOneScore > playerTwoScore) {
    headEl.innerText = "Player 1 wins";
}
else if (playerOneScore < playerTwoScore) {
    headEl.innerText = "Player 2 wins";
}
else {
    headEl.innerText = "Tie";
}