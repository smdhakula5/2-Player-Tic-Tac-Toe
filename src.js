let x = 0;
let moves = 0;
let gameEnded = false;

const s = new Set([
  "https://t3.ftcdn.net/jpg/03/14/94/82/360_F_314948238_0Oyq2Legn2rOTWDAlgnG7KO2q7mkKw9A.jpg",
  "https://thumbs.dreamstime.com/b/neon-d-font-blue-pink-light-rendering-letter-o-205550324.jpg"
]);

function handleClick(event) {
  if (moves < 9 && !gameEnded) {
    const cell = event.target;
    if (!s.has(cell.src)) {
      if (x === 0) {
        cell.src =
          "https://t3.ftcdn.net/jpg/03/14/94/82/360_F_314948238_0Oyq2Legn2rOTWDAlgnG7KO2q7mkKw9A.jpg";
      } else {
        cell.src =
          "https://thumbs.dreamstime.com/b/neon-d-font-blue-pink-light-rendering-letter-o-205550324.jpg";
      }
      setTimeout(check, 100);
      x ^= 1;
      moves++;
    }
  }
}

const cells = document.querySelectorAll("img");
cells.forEach((cell) => cell.addEventListener("click", handleClick));

document.getElementById("reset").addEventListener("click", () => {
  cells.forEach(
    (cell) => (cell.src = "https://www.illustoon.com/photo/thum/7266.png")
  );
  x = 0;
  moves = 0;
  gameEnded = false;
});

function check() {
  const winningCombinations = [
    [1, 2, 3], [4, 5, 6], [7, 8, 9],
    [1, 4, 7], [2, 5, 8], [3, 6, 9],
    [1, 5, 9], [3, 5, 7]
  ];

  for (const combination of winningCombinations) {
    const [a, b, c] = combination;
    const cell1 = document.getElementById(a.toString());
    const cell2 = document.getElementById(b.toString());
    const cell3 = document.getElementById(c.toString());

    if (
      cell1.src !== "https://www.illustoon.com/photo/thum/7266.png" &&
      cell1.src === cell2.src &&
      cell2.src === cell3.src
    ) {
      alert("Player " + (x === 0 ? "O" : "X") + " Won The Game");
      gameEnded = true;
      break;
    }
  }

  if (!gameEnded && moves === 9) {
    alert("It's a draw");
    gameEnded = true;
  }
}

