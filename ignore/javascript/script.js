var mainPic = document.getElementById("mainPic");
var mainTxt = document.getElementById("mainTxt");
var bgColor = document.getElementById("main");

const colorArr = [
    "#6FA0A8",
    "#418BB4",
    "#57C0E0"
];
const textArr = [
    "<b>Over Mij</b><br><br>Mijn naam is Douwe Kapteijn, ik ben 17 jaar oud, en ik kom uit Amersfoort.<br><br>Ik heb hier mijn hele leven gewoond, met mijn vader, moeder, 2 broers en hond.<br><br>Ik studeer nu een opleiding softwaredevelopment, MBO niveau 4, bij het Deltion College in Zwolle.",
    "<b>Waarom ik ICT, en specfiek softwaredevelopment ben gaan doen</b><br><br>Vroeger was ik ook al gefascineerd door techniek en computers, maar niet in de manier dat ik het nu doe. <br><br> Waarom ik deze studie heb gekozen is omdat ik al wel iets wist van python, wat ik intussen verleerd ben. <br><br> Ik kende ook een klein beetje HTML maar vrijwel zonder css, en als het er in zat was het meer inline CSS. <br><br> Tegenwoordig kan ik al wel veel meer: HTML, CSS, JavaScript, PHP, jQuery en C#. <br><br> Ik vind momenteel Frontend wel leuker dan Backend, omdat je meer met iets visueels bezig bent.",
    "<b>Hobbys</b><br><br>Programeren<br><br>PC Bouwen<br><br>Gamen<br><br>Autorijden<br><br>Fietsen<br<br>Karten<br><br>Tennis<br><br>Fotografie<br><br>Vliegtuigspotten."
];
const imgArr = [
    "images/amersfoort.jpg",
    "images/HTMl-CSS-JS.png",
    "images/karten.jpg"
];
const milliseconds = 30000; 
var whereaminow = 0; 

function start() {
  homeScreen(whereaminow);
}

function bodyonLoad() {
    setTimeout(function () {
      homeScreen(whereaminow);
    }, milliseconds);
}

function homeScreen(currentnow){

      
    // Voer alles uit
    mainPic.innerHTML = "<img id='mainPic' src='" + imgArr[currentnow] + "'>";
    mainTxt.innerHTML = textArr[currentnow];
    bgColor.style.backgroundColor = colorArr[currentnow];
    
    // Verhoog whereaminow
    whereaminow++;
  
    if (whereaminow == imgArr.length) {
      whereaminow = 0;
    }
    bodyonLoad();
}

function fLeftAsideClick()
{
    if(document.getElementById("aLeft").className == "close"){
        document.getElementById("aLeft").className = "open"
        document.getElementById("Button").className = "fas fa-arrow-circle-left"
    }   
    else{
        document.getElementById("aLeft").className = "close"
        document.getElementById("Button").className = "fas fa-arrow-circle-right"
    }
};
function fSwipeClick()
{
    if(document.getElementById("Left").className == "close"){
        document.getElementById("Left").className = "open"
        document.getElementById("Right").className = "close"
        document.getElementById("Button").className = "fas fa-arrow-circle-left"
    }   
    else{
        document.getElementById("Left").className = "close"
        document.getElementById("Right").className = "open"
        document.getElementById("Button").className = "fas fa-arrow-circle-right"
    }
}
