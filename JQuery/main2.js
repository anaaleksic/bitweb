
var links = ["./img/slika 1.jpg", "./img/slika 1.jpg", "./img/slika 1.jpg", "./img/slika 1.jpg", "./img/slika 1.jpg",]
var body = $('body');

var div = $("<div></div>");

for (var i = 0; i < links.length; i++) {
    var randomWidth = 100 + Math.random() * 300;
    var image = $("<img>").attr("src", links[i]).css('width', randomWidth);
    div.append(image);


    if (randomWidth < 200) {
        image.css('border', '5px solid green')
    }
    else {

    }

}
div.css("width", "90%");
div.css("margin", "auto");
body.append(div);

/*
$("img").each(function (i, imageNode) {
    var $img = $(imageNode);

    if ($img.width() > 200) {
        return false;
    }

    if ($img.width() <= 200) {

        $img.addClass('border');

    } else {
        return false;
    }
})
//uvak na kraju mora da stoji gde appendujemo ovo sve tj body.append(div)

//drugi nacin

$("img").each(function (i, imageNode) {
    var $img = $(imageNode);

    if ($img.width() > 200) {
        return false;
    }

    $img.addClass('border');

})
//uvak na kraju mora da stoji gde appendujemo ovo sve tj body.append(div)
*/







