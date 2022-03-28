const clouds = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const heads = document.querySelectorAll(".head");
let lastCloud;

let timeUp = false; //false si pas fini true si fini
let score = 0;

//fonction qui créée un temps d'apparition de la tête aléatoire
function randomTime(min,max){
    return Math.round(Math.random()*(max-min)+min);
}
//fonction qui randomize la tête qui apparaît et qui se relance si une même tête est choisi aléatoirement 2 fois d'affilée
function randomCloud(clouds){
    const indexCloud = Math.floor(Math.random()*clouds.length);
    const cloudSelect = clouds[indexCloud];

    if(cloudSelect===lastCloud) {
        return randomCloud(clouds);
    }
    lastCloud = cloudSelect;

    return cloudSelect;
}
//fonction qui fait apparaitre les têtes et utilise les résultats des deux fonctions précédentes
function showHead1(){
    const time = randomTime(600,1000);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeUp) showHead1();
        cloud.classList.remove("up");
    } ,time)
}

function showHead2(){
    const time = randomTime(500,950);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeUp) showHead2();
        cloud.classList.remove("up");
    } ,time)
}

function showHead3(){
    const time = randomTime(300,850);
    const cloud = randomCloud(clouds);
    cloud.classList.add("up");
    setTimeout(() => {
        if(!timeUp) showHead3();
        cloud.classList.remove("up");
    } ,time)
}

//fonction qui incrémente le score dans le scoreboard
function playerScore(event){
    if(!event.isTrusted) return;
    score++;
    this.classList.remove("up");
    scoreBoard.textContent = score;
}

heads.forEach(head => head.addEventListener("click",playerScore)) ; 

//fonction de démarrage du jeu
function startGame1() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead1();
    setTimeout(()=> {
        timeUp = true;
        setTimeout(()=> {
            scoreBoard.textContent ="end";
        }, 2000);
    } ,10000)
}

function startGame2() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead2();
    setTimeout(()=> {
        timeUp = true;
        setTimeout(()=> {
            scoreBoard.textContent ="end";
        }, 2000);
    } ,10000)
}

function startGame3() {
    scoreBoard.textContent = 0;
    score = 0;
    timeUp = false;
    showHead3();
    setTimeout(()=> {
        timeUp = true;
        setTimeout(()=> {
            scoreBoard.textContent ="end";
        }, 2000);
    } ,10000)
}

/* NIVEAUX */
const speed = 50;
var i=0;
var text1 = "NEWBIE";

var j=0;
var text2 = "INTERMEDIATE";

var k=0;
var text3 = "HARDCORE";

//fonction de style qui propose les 3 niveaux de difficulté
function typeWriter1() {
    if(i<text1.length) {
        document.getElementById("demo1").innerHTML += text1.charAt(i);
        i++;
        setTimeout(typeWriter1,speed);
    }
}

function typeWriter2() {
    if(j<text2.length) {
        document.getElementById("demo2").innerHTML += text2.charAt(j);
        j++;
        setTimeout(typeWriter2,speed);
    }
}

function typeWriter3() {
    if(k<text3.length) {
        document.getElementById("demo3").innerHTML += text3.charAt(k);
        k++;
        setTimeout(typeWriter3,speed);
    }
}

//choisir le niveaux de difficulté en cliquant sur Morty
function myClick() {
    for(var i=1; i<=3; i++){
        document.getElementById("demo"+i).addEventListener("click", () => {
            document.getElementById("demo1").style.display = "none";
            document.getElementById("demo2").style.display = "none";
            document.getElementById("demo3").style.display = "none";
        });
    }
}

document.getElementById("morty-play").addEventListener("click", function(){
    typeWriter1();
    typeWriter2();
    typeWriter3();
    myClick();
});
