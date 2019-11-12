var links = ["./img/slika 1.jpg", "./img/slika 1.jpg", "./img/slika 1.jpg", "./img/slika 1.jpg", "./img/slika 1.jpg",]
var body = $('body');


for (var i = 0; i < links.length; i++) {
    var randomWidth = 200 + Math.random() * 300;
    var image = $("<img>").attr("src", links[i]).css('width', randomWidth);
    body.append(image);
}




