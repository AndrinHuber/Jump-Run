var gameDiv = document.getElementById("game");
var character = document.getElementById("character");
var block = document.getElementById("block1");
var block2 = document.getElementById("block2");
var counterHTML = document.getElementById("counter");
var startText = document.getElementById("starttext");
var characterPic = document.getElementById("characterPic");
var enemy1Pic = document.getElementById("enemy1Pic");
var enemy2Pic = document.getElementById("enemy2Pic");
var grass = document.getElementById("grass");
var grass2 = document.getElementById("grass2");
var Textscore = document.getElementById("scoreText");
var Texthighscore = document.getElementById("highscoreText");
var gameOver = document.getElementById("gameOver");
var gameOver3d = document.getElementById("gameOver3d");
var gameoverbutton = document.getElementById("gameoverbutton");
var levelBar = document.getElementById("levelBar");
var levelText = document.getElementById("levelText");
var percentagetext = document.getElementById("percentagetext");
var cloudholder = document.getElementById("cloudholder");
var settingbutton = document.getElementById("settingbutton");
var homebutton = document.getElementById("homebutton");
var hometab = document.getElementById("hometab");
var hometab3d = document.getElementById("hometab3d");
var settingstab = document.getElementById("settingstab");
var settingstab3d = document.getElementById("settingstab3d");
var skinGiraffelocked = document.getElementById("skinGiraffelocked");
var skinPinguinlocked = document.getElementById("skinPinguinlocked");
var skinBunnylocked = document.getElementById("skinBunnylocked");
var skinChickenlocked = document.getElementById("skinChickenlocked");
var lockedDiv = document.getElementsByClassName("lockedDiv");
var giraffeleveltext = document.getElementById("giraffeleveltext");
var pinguinleveltext = document.getElementById("pinguinleveltext");
var bunnyleveltext = document.getElementById("bunnyleveltext");
var chickenleveltext = document.getElementById("chickenleveltext");
var giraffenewSkin = document.getElementById("giraffenewSkin");
var pinguinnewSkin = document.getElementById("pinguinnewSkin");
var bunnynewSkin = document.getElementById("bunnynewSkin");
var chickennewSkin = document.getElementById("chickennewSkin");
var newSkinIsAvailable = document.getElementById("newSkinIsAvailable");
var giraffeskinDiv = document.getElementById("giraffeskinDiv");
var pinguinskinDiv = document.getElementById("pinguinskinDiv");
var bunnyskinDiv = document.getElementById("bunnyskinDiv");
var chickenskinDiv = document.getElementById("chickenskinDiv");
var languagetext = document.getElementById("languagetext");
var styletxt = document.getElementById("styletxt");
var darkMode = document.getElementById("darkMode");
var standartMode = document.getElementById("standartMode");
var deu = document.getElementById("deu");
var eng = document.getElementById("eng");
var fra = document.getElementById("fra");
var esp = document.getElementById("esp");
var che = document.getElementById("che");
var levelcounter = 0;
var counter = 0;
var velocity = 3;
var speed = 0.01;
var isRunning = new Boolean(false);
var isgameOver = false;

if (localStorage.getItem('levelBarMAX') == null || localStorage.getItem('levelBarMAX') == "") {
    localStorage.setItem('levelBarMAX', 10);
    levelBar.max = 10;
}
if (localStorage.getItem('level') == null || localStorage.getItem('level') == "" || localStorage.getItem('level') > 99999999) {
    localStorage.setItem('level', 0);
    levelText.innerHTML = "Level: " + localStorage.getItem('level');
}
if (localStorage.getItem('valueStorage') == null || localStorage.getItem('valueStorage') == "") {
    localStorage.setItem('valueStorage', 0);
}
if (localStorage.getItem('highscore') == null || localStorage.getItem('highscore') == "") {
    localStorage.setItem('highscore', 0);
}
if (localStorage.getItem('skin') == null || localStorage.getItem('skin') == "") {
    localStorage.setItem('skin', 'noskin');
}
if (localStorage.getItem('mode') == null || localStorage.getItem('mode') == "") {
    localStorage.setItem('mode', 'standartMode');
}

levelText.innerHTML = "Level: " + localStorage.getItem('level');
levelbarMax = localStorage.getItem('levelBarMAX');
levelBar.max = levelbarMax;
percentagetext.innerHTML = localStorage.getItem('valueStorage') + " / " + levelbarMax;
levelBar.value = localStorage.getItem('valueStorage');
settingstab.style.visibility = "hidden";
settingstab3d.style.visibility = "hidden";
hometab.style.visibility = "hidden";
hometab3d.style.visibility = "hidden";
block.style.animation = "none";
block2.style.animation = "none";
block.style.visibility = "hidden";
block2.style.visibility = "hidden";
cloudholder.style.cursor = "pointer";
grass.style.animationDuration = "0s";
grass2.style.animationDuration = "0s";
gameOver.style.visibility = "hidden";
gameOver3d.style.visibility = "hidden";
newSkinIsAvailable.style.display = "none";
giraffenewSkin.style.display = "none";
pinguinnewSkin.style.display = "none";
bunnynewSkin.style.display = "none";
chickennewSkin.style.display = "none";
var giraffelevel = 0;
var pinguinlevel = 2;
var bunnylevel = 5;
var chickenlevel = 7;
pinguinleveltext.innerHTML = "Level: " + pinguinlevel;
giraffeleveltext.innerHTML = "Level: " + giraffelevel;
bunnyleveltext.innerHTML = "Level: " + bunnylevel;
chickenleveltext.innerHTML = "Level: " + chickenlevel;
console.log("Hallo ich bin eine Konsole :)\nSchön hast du mich gefunden hast. In der Konsole siehst du Fehlermeldungen vom Spiel.\nGeht etwas im Spiel nicht? Brauchst du Hilfe? Dann kannst du hier die entsprechenden Informationen sehen!");
checkSkin();
checkStatusSkins();
checkifaSkinIsNew();
checkMode();
checkifAdBlock();
//checkifBanned();

function checkStatusSkins(){
    checkifLocked('giraffe');
    checkifLocked('pinguin');
    checkifLocked('bunny');
    checkifLocked('chicken');
}

function checkifAdBlock(){
    if( document.getElementById('PR44EPxgRGrsoVe') ){
        alert('Es ist kein AdBlocker aktiv!');
      } else {
        alert('AdBlocker ist aktiv und Werbung wird blockiert!');
      }
}

function checkMode(){
    if(localStorage.getItem('mode') == 'standartMode'){
        document.body.style.backgroundColor = "lightpink";
    }
    if(localStorage.getItem('mode') == 'darkMode'){
        document.body.style.backgroundColor = "black";
    }
}

function standart(){
    localStorage.setItem('mode', 'standartMode');
    checkMode();
}

function dark(){
    localStorage.setItem('mode', 'darkMode');
    checkMode();
}

function checkifaSkinIsNew(){
    if(giraffenewSkin.style.display == "none" && pinguinnewSkin.style.display == "none" && bunnynewSkin.style.display == "none" 
    && chickennewSkin.style.display == "none"){
        newSkinIsAvailable.style.display = "none";
    }else{
        newSkinIsAvailable.style.display = "block";
    }
}

window.addEventListener('storage', function (e) {
    //changeMessage();
});

function checkifBanned() {
    if (localStorage.getItem('penalty') >= 2) {
        while (0 == 0) {
            alert("Du Kannst dieses Spiel NICHT MEHR SPIELEN, weil du betrügen wolltest!");
        }
    }
}
/*
function changeMessage(){
  localStorage.setItem('highscore', 0);

  if(localStorage.getItem('penalty') == null || localStorage.getItem('penalty') == ""){
    localStorage.setItem('penalty', 0);
  }
  if(localStorage.getItem('penalty') == 0){
    localStorage.setItem('penalty', 1);
    alert("Bitte verändere den Local Storage NICHT! :( \n(Hast du das wirklich Nötig?) \n Zur Strafe wird dir beim nächsten mal ALLES Zurückgesetzt und du kannst das Spiel NICHT mehr spielen! :)");
  }else{
    localStorage.setItem('penalty', 2);
    alert("Bitte verändere den Local Storage NICHT! :( \n(Hast du das wirklich Nötig?) \n Zur Strafe wird jetzt alles Zurückgesetzt und das spielen UNMÖGLICH gemacht! :)");
    checkifBanned();
  }
}
*/
document.body.onkeydown = function (e) {
    switch (isgameOver) {
        case false:
            if (e.keyCode == 32 || e.keyCode == 38) {
                jumpfunction();
            }
            break;
        case true:
            if (e.keyCode == 13) {
                closeGameover();
            }
            break;
    }
}

function jumpfunction() {
    switch (true) {
        case (character.classList != "animate" && character.classList != "animate2"):
            jump();
            break;
        case (character.classList == "animate" && character.classList != "animate2"):
            doublejump();
            break;
    }
}

function jump() {
    if (isRunning == false && isgameOver == false) { start(); }
    character.classList.add("animate");
    setTimeout(function () {
        if (character.classList == "animate") {
            character.classList.remove("animate");
        }
    }, 700);
}

function doublejump() {
    character.classList.remove("animate");
    character.classList.add("animate2");
    setTimeout(function () {
        character.classList.remove("animate2");
    }, 700);
}

function checkSkin(){
    if(localStorage.getItem('skin') == 'noskin'){
        characterPic.src = "pictures/giraffe.png";
        localStorage.setItem('skin', 'giraffe');
    }
    characterPic.src = "pictures/" + localStorage.getItem('skin') + ".png";
}

var startAnimations = setInterval(function () {
    if (isRunning == true && isgameOver == false) {
        grass.style.animationDuration = "2.5s";
        grass2.style.animationDuration = "2.5s";
        characterPic.src = "pictures/" + localStorage.getItem('skin') + "-2.png";
        enemy1Pic.src = "pictures/Hund-2.png";
        enemy2Pic.src = "pictures/Tintenfisch-2.png";
        setTimeout(() => {
            if (isRunning == true && isgameOver == false) {
                characterPic.src = "pictures/" + localStorage.getItem('skin') + "-1.png";
                enemy1Pic.src = "pictures/Hund-1.png";
                enemy2Pic.src = "pictures/Tintenfisch-1.png";
            }
        }, 100);
        setTimeout(() => { }, 100);
    }
}, 200);

var makeFasterandRandom = setInterval(function () {
    if (velocity >= 1) {
        if (parseInt(window.getComputedStyle(block).getPropertyValue("left")) <= -20) {
            counter = counter + 1;
            counterHTML.innerHTML = counter;
            block.style.animation = "none";
            block.style.visibility = "hidden";
            setTimeout(() => {
                setTimeout(() => {
                    if (isRunning == true && isgameOver == false) {
                        block.style.visibility = "visible";
                        setAnimationNew(block);
                        velocity = velocity - speed;
                        block.style.animationDuration = velocity + "s";
                    }
                }, 100);
            }, Math.floor(Math.random() * 1000));
        }
        if (parseInt(window.getComputedStyle(block2).getPropertyValue("left")) <= -20) {
            counter = counter + 1;
            counterHTML.innerHTML = counter;
            block2.style.animation = "none";
            block2.style.visibility = "hidden";
            setTimeout(() => {
                setTimeout(() => {
                    if (isRunning == true && isgameOver == false) {
                        block2.style.visibility = "visible";
                        setAnimationNew(block2);
                        velocity = velocity - speed;
                        block2.style.animationDuration = velocity + "s";
                    }
                }, 100);
            }, Math.floor(Math.random() * 3000));
        }
    }
}, 50)

function setAnimationNew(blockType) {
    switch (blockType) {
        case block:
            blockType.style.animation = "block";
            break;
        case block2:
            blockType.style.animation = "block2";
            break;
    }
    blockType.style.animationIterationCount = "infinite";
    blockType.style.animationTimingFunction = "linear";
}

function gameDivclick() {
    if (isRunning == true && isgameOver == false) {
        jumpfunction()
    }
    if (isRunning == false && isgameOver == false) {
        start();
    }
}

function settingsClick() {
    if(settingstab.style.visibility == "hidden" && isRunning == false){
        hometab.style.visibility = "hidden";
        hometab3d.style.visibility = "hidden";
        settingstab.style.visibility = "visible";
        settingstab3d.style.visibility = "visible";
    }else{
        settingstab.style.visibility = "hidden";
        settingstab3d.style.visibility = "hidden";
    }
}

function homeClick() {
    if(hometab.style.visibility == "hidden" && isRunning == false){
        settingstab.style.visibility = "hidden";
        settingstab3d.style.visibility = "hidden";
        hometab.style.visibility = "visible";
        hometab3d.style.visibility = "visible";
    }else{
        hometab.style.visibility = "hidden";
        hometab3d.style.visibility = "hidden";
    }
}

function start() {
    if (isRunning == false && isgameOver == false && settingstab.style.visibility == "hidden" && hometab.style.visibility == "hidden") {
        isRunning = true;
        grass.style.animationDuration = "2.5s";
        grass2.style.animationDuration = "2.5s";
        gameoverbutton.style.transition = ".1s";
        startText.style.visibility = "hidden";
        velocity = 3;
        block.style.visibility = "visible";
        block2.style.visibility = "visible";
        setAnimationNew(block);
        setAnimationNew(block2);
        randomduration = ((Math.random() * 2) + 2.5) + "s";
        block.style.animationDuration = randomduration;
        block2.style.animationDuration = velocity + "s";
    }
}

function closeGameover() {
    isgameOver = false;
    gameoverbutton.style.transition = "none";
    gameOver.style.visibility = "hidden";
    gameOver3d.style.visibility = "hidden";
    startText.style.display = "block";
    cloudholder.style.cursor = "pointer";
    startText.style.visibility = 'visible';
    gameDiv.classList.add("startclick");
    characterPic.src = "pictures/" + localStorage.getItem('skin') + ".png";
    counter = 0;
    counterHTML.innerHTML = counter;
}

function checkifLocked(Skin){
    if(Skin == 'giraffe' && localStorage.getItem('level') >= giraffelevel){
        skinGiraffelocked.style.visibility = "hidden";
        if(characterPic.src.includes("giraffe") == true){
            giraffeskinDiv.style.backgroundColor = "lightpink";
        }
        if((localStorage.getItem('level') - giraffelevel) == 0 && giraffeskinDiv.style.backgroundColor != "lightpink"){
            giraffenewSkin.style.display = "block";
        }
    }
    if(Skin == 'pinguin' && localStorage.getItem('level') >= pinguinlevel){
        skinPinguinlocked.style.visibility = "hidden";
        if(characterPic.src.includes("pinguin") == true){
            pinguinskinDiv.style.backgroundColor = "lightpink";
        }
        if((localStorage.getItem('level') - pinguinlevel) == 0  && pinguinskinDiv.style.backgroundColor != "lightpink"){
            pinguinnewSkin.style.display = "block";
        }
    }
    if(Skin == 'bunny' && localStorage.getItem('level') >= bunnylevel){
        skinBunnylocked.style.visibility = "hidden";
        if(characterPic.src.includes("bunny") == true){
            bunnyskinDiv.style.backgroundColor = "lightpink";
        }
        if((localStorage.getItem('level') - bunnylevel) == 0  && bunnyskinDiv.style.backgroundColor != "lightpink"){
            bunnynewSkin.style.display = "block";
        }
    }
    if(Skin == 'chicken' && localStorage.getItem('level') >= chickenlevel){
        skinChickenlocked.style.visibility = "hidden";
        if(characterPic.src.includes("chicken") == true){
            chickenskinDiv.style.backgroundColor = "lightpink";
        }
        if((localStorage.getItem('level') - chickenlevel) == 0 && chickenskinDiv.style.backgroundColor != "lightpink"){
            chickennewSkin.style.display = "block";
        }
    }
}

function setSkin(Skin) {
    localStorage.setItem('skin', Skin);
    removeNewText(Skin);
    characterPic.src = "pictures/" + localStorage.getItem('skin') + ".png";
}

function removeNewText(Skin){
    giraffeskinDiv.style.backgroundColor = "whitesmoke";
    pinguinskinDiv.style.backgroundColor = "whitesmoke";
    bunnyskinDiv.style.backgroundColor = "whitesmoke";
    chickenskinDiv.style.backgroundColor = "whitesmoke";
    if(Skin == 'giraffe'){
        giraffenewSkin.style.display = "none";
        giraffeskinDiv.style.backgroundColor = "lightpink";
    } 
    if(Skin == 'pinguin'){
        pinguinnewSkin.style.display = "none";
        pinguinskinDiv.style.backgroundColor = "lightpink";
    }
    if(Skin == 'bunny'){
        bunnynewSkin.style.display = "none";
        bunnyskinDiv.style.backgroundColor = "lightpink";
    }
    if(Skin == 'chicken'){
        chickennewSkin.style.display = "none";
        chickenskinDiv.style.backgroundColor = "lightpink";
    }
    checkifaSkinIsNew();
}

function levelbarCounter() {
    levelcounter++;
    momLevel = +localStorage.getItem('level') + +1;
    localStorage.setItem('level', momLevel);
    momMAX = Math.round(localStorage.getItem('levelBarMAX') * 1.25);
    localStorage.setItem('levelBarMAX', momMAX);
    levelBar.max = momMAX;
}

var checkDead = setInterval(function () {
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var block2Left = parseInt(window.getComputedStyle(block2).getPropertyValue("left"));

    if (blockLeft < 90 && blockLeft > 20 && characterTop >= 310 || block2Left < 90 && block2Left > 20 && characterTop >= 310) {
        isRunning = false;
        isgameOver = true;
        character.classList.remove("animate");
        cloudholder.style.cursor = "default";
        gameOver.style.visibility = "visible";
        gameOver3d.style.visibility = "visible";
        grass.style.animationDuration = "0s";
        grass2.style.animationDuration = "0s";
        block.style.visibility = "hidden";
        block2.style.visibility = "hidden";
        block.style.animation = "none";
        block2.style.animation = "none";
        //HIGHSCORE NACHRICHT
        var highscore = localStorage.getItem("highscore");
        switch (true) {
            case (highscore < counter):
                localStorage.setItem('highscore', counter);
                Textscore.innerHTML = "Score: " + counter;
                Texthighscore.innerHTML = "*NEUER* Highscore: " + localStorage.getItem("highscore");
                break;
            case (highscore >= counter):
                Textscore.innerHTML = "Score: " + counter;
                Texthighscore.innerHTML = "Highscore: " + localStorage.getItem("highscore");
                break;
        }
        newValue = +localStorage.getItem('valueStorage') + +counter;
        localStorage.setItem('valueStorage', newValue);
        switch (true) {
            case localStorage.getItem('valueStorage') == levelBar.max:
                localStorage.setItem('valueStorage', 0);
                newValue = 0;
                momLevel = +localStorage.getItem('level') + +1;
                levelbarCounter();
                break;
            case localStorage.getItem('valueStorage') > levelBar.max:
                overlapingValue = localStorage.getItem('valueStorage') - levelBar.max;
                localStorage.setItem('valueStorage', overlapingValue);
                newValue = overlapingValue;
                levelbarCounter();
                break;
        }
        while (localStorage.getItem('valueStorage') > levelBar.max) {
            overlapingValue = localStorage.getItem('valueStorage') - levelBar.max;
            localStorage.setItem('valueStorage', overlapingValue);
            newValue = overlapingValue;
            levelbarCounter();
        }
        if (levelcounter > 0) {
            levelText.innerHTML = "*NEUES* Level: " + localStorage.getItem('level');
            levelcounter = 0;
        } else {
            levelText.innerHTML = "Level: " + localStorage.getItem('level');
        }
        levelBar.value = newValue;
        percentagetext.innerHTML = levelBar.value + " / " + localStorage.getItem('levelBarMAX');
        checkStatusSkins();
        characterPic.src = "pictures/" + localStorage.getItem('skin') + ".png";
    }
}, 20);

var language = {
    eng : {
        starttext: 'To start the Game press:<br> [Click] | [Space] | [KeyUP]',
        gameoverbutton: 'Play',
        incDevText: 'Unfortunately, the game is incompatible with this device!<br>[minimum size: 400 x 650]',
        settings: 'Settings',
        newSkinText: 'New',
        languagetext: "Language",
        styletxt: "Style"
    },
    deu: {
        starttext: 'Um das Spiel zu starten Drücke: <br> [Klick] | [Leertaste] | [KeyUP]',
        gameoverbutton: 'Weiter',
        incDevText: 'Das Spiel ist mit diesem Gerät leider inkompatibel!<br>[Minimum Grösse: 400 x 650]',
        settings: 'Einstellungen',
        newSkinText: 'Neu',
        languagetext: "Sprache",
        styletxt: "Aussehen"
    },
    fra : {
        starttext: 'Pour démarrer le jeu, appuyez sur : <br> [Cliquez] | [Espace] | [KeyUP]',
        gameoverbutton: 'Jouer',
        incDevText: 'Malheureusement, le jeu est incompatible avec cet appareil !<br>[taille minimum : 400 x 650]',
        settings: 'Paramètres',
        newSkinText: 'Nouveau',
        languagetext: "Langue",
        styletxt: "Style"
    },
    esp : {
        starttext: 'Para iniciar el juego, presione: <br> [clic] | [Espacio] | [KeyUP]',
        gameoverbutton: 'tocar',
        incDevText: 'Desafortunadamente, el juego no es compatible con este dispositivo. <br> [Tamaño mínimo: 400 x 650]',
        settings: 'ajustes',
        newSkinText: 'Nuevo',
        languagetext: "lengua",
        styletxt: "apariencia"
    },
    che : {
        starttext: "Ums Spiel z'starte druck: <br> [Klick] | [Leertaste] | [KeyUP]",
        gameoverbutton: 'Wiiter',
        incDevText: "s'Spiel isch mit dem Grät leider inkompatibel!<br>[Minimum Grössi: 400 x 650]",
        settings: 'Iistellige',
        newSkinText: 'Neu',
        languagetext: "Sproch",
        styletxt: "Ussehe"
    }
};

if(window.location.hash){
    if(window.location.hash == "#eng"){
        setSelectedLanguage(eng);
        setEnglish();
    }
    if(window.location.hash == "#deu"){
        setSelectedLanguage(deu);
        starttext.innerHTML = language.deu.starttext;
        gameoverbutton.innerHTML = language.deu.gameoverbutton;
        incDevText.innerHTML = language.deu.incDevText;
        settings.innerHTML = language.deu.settings;
        styletxt.innerHTML = language.deu.styletxt;
        languagetext.innerHTML = language.deu.languagetext;
        elements=document.getElementsByClassName("newSkinText");
        for(var i = 0; i < elements.length; i++){
            elements[i].innerText=language.deu.newSkinText;
        }
    }
    if(window.location.hash == "#fra"){
        setSelectedLanguage(fra);
        starttext.innerHTML = language.fra.starttext;
        gameoverbutton.innerHTML = language.fra.gameoverbutton;
        incDevText.innerHTML = language.fra.incDevText;
        settings.innerHTML = language.fra.settings;
        styletxt.innerHTML = language.fra.styletxt;
        languagetext.innerHTML = language.fra.languagetext;
        elements=document.getElementsByClassName("newSkinText");
        for(var i = 0; i < elements.length; i++){
            elements[i].innerText=language.fra.newSkinText;
        }
    }
    if(window.location.hash == "#esp"){
        setSelectedLanguage(esp);
        starttext.innerHTML = language.esp.starttext;
        gameoverbutton.innerHTML = language.esp.gameoverbutton;
        incDevText.innerHTML = language.esp.incDevText;
        settings.innerHTML = language.esp.settings;
        styletxt.innerHTML = language.esp.styletxt;
        languagetext.innerHTML = language.esp.languagetext;
        elements=document.getElementsByClassName("newSkinText");
        for(var i = 0; i < elements.length; i++){
            elements[i].innerText=language.esp.newSkinText;
        }
    }
    if(window.location.hash == "#che"){
        setSelectedLanguage(che);
        starttext.innerHTML = language.che.starttext;
        gameoverbutton.innerHTML = language.che.gameoverbutton;
        incDevText.innerHTML = language.che.incDevText;
        settings.innerHTML = language.che.settings;
        styletxt.innerHTML = language.che.styletxt;
        languagetext.innerHTML = language.che.languagetext;
        elements=document.getElementsByClassName("newSkinText");
        for(var i = 0; i < elements.length; i++){
            elements[i].innerText=language.che.newSkinText;
        }
    }
}else{
    setSelectedLanguage(eng);
    setEnglish();
}

function setSelectedLanguage(language){
    language.style.backgroundColor = "black";
    language.style.color = "white";
}
function setEnglish(){
    starttext.innerHTML = language.eng.starttext;
    gameoverbutton.innerHTML = language.eng.gameoverbutton
    incDevText.innerHTML = language.eng.incDevText;
    settings.innerHTML = language.eng.settings;
    styletxt.innerHTML = language.eng.styletxt;
    languagetext.innerHTML = language.eng.languagetext;
    elements=document.getElementsByClassName("newSkinText");
    for(var i = 0; i < elements.length; i++){
        elements[i].innerText=language.eng.newSkinText;
    }
}

var dataReload = document.querySelectorAll("[data-reload]");


for(i = 0; i <= dataReload.length; i++){
    if(dataReload[i] != undefined){
        dataReload[i].onclick = function(){
            setTimeout(function() {
                location.reload();
            }, 100);
        }
    }
}