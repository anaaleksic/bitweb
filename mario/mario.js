
var mario = document.getElementById("mario");
var pozadina = document.getElementById("pozadina");


document.onkeydown = checkKeyDown;
document.onkeyup = checkKeyUp;


function checkKeyDown(e) {
    if (e.keyCode === "39") {
        mario.className = "";
        mario.classList.add("marioRun");
        pozadina.classList.add("pozadina1");
    }
    else if (e.keyCode === "37") {
        mario.className = "";
        mario.classList.add("marioRun1");
        pozadina.classList.add("pozadina2");
    }
}

function checkKeyUp(e) {
    if (e.keyCode == '39') {
        mario.className = "";
        mario.classList.add("mario");
        pozadina.className = "";

    }
    else if (e.keyCode == '37') {
        mario.className = "";
        mario.classList.add("mario1");
        pozadina.className = "";
    }
}
