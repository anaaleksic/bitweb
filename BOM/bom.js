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

function hello() {
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
question(userChoice());
