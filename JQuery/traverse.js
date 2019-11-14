"use strict"





$(function () {

    var $firstGalleryImage = $('body').find('.selected');
    $firstGalleryImage.removeClass('selected');

    var $secondGallery = $firstGalleryImage.parent().next()

    $secondGallery.children().eq(1).addClass('selected')
})

