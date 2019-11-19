const ui = (function () {


    function display(shows) {

        shows.forEach(show => {
            // const li = $(`<li>${user.name} </li>`);
            // $('.listOfUser').append(li);

            const div = $(`<div>`);
            const span = $(`<span>${show.name}</span>`);

            const img = $('<img>').attr('src', show.image).addClass('show-image')
            const imgClickable = $('<a>').attr('href', show.url);

            imgClickable.append(img);

            div.append($(imgClickable));
            div.append(span);
            mainWrap.append(div);
        });


    }

    return {
        display
    }




})();