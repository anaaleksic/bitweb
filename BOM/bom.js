// //Prvi zadatak:

// function sum(a, b) {
//     console.log(a + b);
// }
// sum(5, 5);

// //Drugi zadatak:

// function browser() {
//     console.log(window.navigator.platform);
//     console.log(window.navigator.appVersion);
//     console.log(window.navigator.geolocation);
// }

// console.log(browser());

// function isOnline() {
//     if (window.navigator.onLine) {
//         console.log('Browser is online');
//     } else {
//         console.log('Browser is offline');
//     }
// }

// isOnline();

// //Treci zadatak:

// function windowScreen() {
//     console.log('Current browser width: ' + window.screen.availWidth);
//     console.log('Current browser height: ' + window.screen.availHeight);
//     console.log('Max possible browser height: ' + window.screen.height);

// }
// windowScreen();

// //Cetvrti zadatak:

// function websiteLocation() {
//     console.log("Current url address: " + window.location.href);
//     console.log("Current domain name: " + window.location.host);
//     console.log("Current used protocol: " + window.location.protocol);
//     console.log("Current parameters are " + window.location.search);

// }
// websiteLocation();

// function reLoadPage() {
//     console.log(window.location.reload);
// }

// reLoadPage();

// function redirects() {
//     window.location.href = "http://www.google.com";
// }

// redirects();

// //Peti zadatak (localStorage):

// function storesData() {
//     window.localStorage.setItem("torta", "cokoladna");
// }
// storeData();




// function storedData() {

//     if (window.localStorage.length === 0) {
//         console.log("there is no data");
//     } else {
//         console.log(window.localStorage.getItem("torta"));
//     }
// }
// storedData();



// function history() {
//     console.log.apply(window.history.forward("http://www.google.com"));
// }
// history();

//Sesti zadatak:

/* function hello() {
    alert('Hello stranger!');
}

function question() {
    return windowScreen.prompt('Are you a boy?')
}

function userChoice(n) {
    if (window.confirm("yes" + n)) {
        return window.alert("Success!!");

    }
}

hello();
question(userChoice()); */

/*
function dropDown() {
    var options = ["prvi", "drugi", "treci", "cetvrti"];
    var svaki = "";
    for (var i = 0; i < options.length; i++) {
        svaki[svaki.length] += options[i];
          vardocument.documentElement.lastElementChild.firstElementChild.firstElementChild
    }
    return svaki;
} dropDown(); */

/* function dropDown(options) {

    for (var i = 0; i < options.length; i++) {
        var selectList = document.createElement("option");
        var text = document.createTextNode(options[i]);
        selectList.appendChild(text);
        var someList = document.querySelector("select");
        someList.appendChild(selectList);
    }

}

dropDown(["option1", "option2", "option3", "option4"]);

//drugi deo zadatka

var arr = ["macka", "mis", "bubasvaba", "pas"];
var parent = document.querySelector("body");

function selectMenu(arr, parent) {

    var select = document.createElement("select");
    var options = "";

    for (var i = 0; i < arr.length; i++) {
        options = options + "<option>" + arr[i] + "</option>"
    }

    select.innerHTML = options;
    parent.appendChild(select);


}
selectMenu(arr, parent);

//rucno

document.documentElement.lastElementChild.querySelector("#bob").innerHTML = "<select><option>Cat</option></select>, <select><option>Dog</option></select>,<select><option>Elephant</option></select>"; */


/*

function s() {
var loc = document.documentElement.lastElementChild.querySelector("#forma");
var inp = document.documentElement.lastElementChild.querySelector("#forma").getElementsByTagName("input").hasAttribute("required");
var boja = document.documentElement.lastElementChild.querySelector("#forma").

document.documentElement.lastElementChild.querySelectorAll("input")


if (inp) {
    
}

/* loc.classList.toggle("red"); */
/* }
s(); */




//Attributes

var parent = document.querySelector("body");
var br = "\n";

function forma() {
    var form = document.createElement("form");

    for (var i = 0; i < 3; i++) {
        var input = document.createElement("input");
        form.appendChild(input);
        if (input.value === "") {
            input.style = "border: 1px solid red";
        }

    }
    parent.appendChild(form);
}
forma();