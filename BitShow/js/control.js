const control = (function (ui, data) {

    $(function () {
        // Handler for .ready() called.

        //pozivanje f-je iz ui sa nizom is data



        function success(shows) {
            ui.displayUsers(shows)

        }

    });




    return {
        success
    }

})(ui, data);