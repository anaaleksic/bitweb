const control = (function (ui, data) {
    function onShowClick() {
        const showId = $(this).attr('data-show-id');

        function onSuccessShow(show) {
            ui.renderShow(show);
        }

        data.fetchShow(showId, onSuccessShow);
    }

    function init() {
        function success(shows) {
            ui.display(shows);
            ui.getShowCards().on('click', onShowClick)
        }

        data.fetchShows(success);
    }

    return {
        init
    }
})(ui, data);


$(function () {
    control.init();
});