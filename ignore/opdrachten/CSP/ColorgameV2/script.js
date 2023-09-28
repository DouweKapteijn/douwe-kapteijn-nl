let clicked = false;
let timer = null;
let punten = [0, 0, -1];
let started = false;
let mainblock = document.getElementById("mainblock");
let colorblock = document.getElementsByClassName("colorblock");
let randomblock = null;
let loops = 0;
let looptimes = 10;
let randomColor;

const colorArr = [
  "yellow",
  "green",
  "red",
  "orange",
  "purple",
  "pink",
  "cyan",
  "blue",
  "lime",
];

//Start de game
function Start() {
  if (!started) {
    setColors();
    started = true;
  }

  for (let i = 0; i <= colorblock.length - 1; i++) {
    let element = colorblock[i];
    element.addEventListener("click", () => {
      input(element);
    });
  }
}

//Stopt de game
function Stop() {
  clearInterval(timer);
}

// Stelt kleuren in + Kijkt of mis
function setColors() {
  if (clicked === false) {
    punten[2] += 1;
    score.innerHTML =
      punten[0] + "x Goed<br>" + punten[1] + "x Fout<br>" + punten[2] + "x Mis";
    console.log("Mis")
  }
  clicked = false;
  colorArr.sort(() => Math.random() - Math.random());
  for (let i = 0; i < colorblock.length; i++) {
    colorblock[i].style.backgroundColor = colorArr[i];
    randomblock = colorblock[Math.floor(Math.random() * colorblock.length)];
    colorblock[i].style.backgroundColor = colorArr[i];
    randomColor = colorArr[Math.floor(Math.random() * colorArr.length)];
    mainblock.style.backgroundColor = randomColor;
  }
  if (loops < looptimes) {
    timer = setTimeout(function () {
      setColors();
    }, 1500);
    loops++;
  }
}

//Kijkt of Goed/Fout + update score
function input(element) {
  clicked = true;
  if (element.style.backgroundColor === mainblock.style.backgroundColor) {
    punten[0]++;
    for (let i = 0; i < colorblock.length; i++) {
      const element = colorblock[i];
      element.style.backgroundColor = "green";
      console.log("Goed");
    }
  } else {
    punten[1]++;
    for (let i = 0; i < colorblock.length; i++) {
      const element = colorblock[i];
      element.style.backgroundColor = "red";
      console.log("Fout");
    }
  }
  score.innerHTML =
    punten[0] + "x Goed<br>" + punten[1] + "x Fout<br>" + punten[2] + "x Mis";
}
