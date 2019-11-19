const data = (function () {
    class Show {
        constructor(name, image, url) {
            this.name = name;
            this.image = image;
            this.url = url;
        }
    }

    function fetchShows(success) {
        const url = `http://api.tvmaze.com/shows`

        $.get(url, function (apiShows) {
            const shows = [];

            for (let i = 0; i < apiShows.length; i++) {
                const apiShow = apiShows[i];

                const show = new Show(apiShow.name, apiShow.image.medium, apiShow.url);

                shows.push(show);
            }

            success(shows)
        });
    }

    return {
        fetchShows
    }
})();