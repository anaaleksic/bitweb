const data = (function () {
    class Show {
        constructor(name, image, url, average, id, seasons, cast) {
            this.name = name;
            this.image = image;
            this.url = url;
            this.average = average;
            // this.summery = summery;
            this.id = id;
            this.seasons = seasons;
            this.cast = cast;

        }
    }

    class Season {
        constructor(id, premierDate, endDate) {
            this.id = id;
            this.premierDate = premierDate;
            this.endDate = endDate;

        }
    }

    class Cast {
        constructor(person) {
            this.person = person;
        }
    }

    const shows = [];

    function fetchShows(success) {
        const url = `http://api.tvmaze.com/shows`

        $.get(url, function (apiShows) {


            for (let i = 0; i < apiShows.length; i++) {
                const apiShow = apiShows[i];

                const show = new Show(apiShow.name, apiShow.image.medium, apiShow.url, apiShow.rating.average, apiShow.id);
                shows.push(show);
            }

            shows.sort(function (a, b) {
                return b.average - a.average;
            });

            shows.length = 50;

            success(shows)



        });


    }

    // function singleShow(showId, successSeasons) {

    //     const urlSeason = ` http://api.tvmaze.com/shows/${showId} `

    //     $.get(urlSeason, function (apiShow) {
    //         const mySeasons = []
    //         for (let i = 0; i < apiShow.length; i++) {
    //             const apiSeason = apiShow[i];

    //             const season = new Season(apiSeason.id, apiSeason.premiereDate, apiSeason.endDate, apiSeason.summary/*apiSeason.image.original*/)
    //             mySeasons.push(season)
    //             console.log(apiSeason.summary);

    //         }

    //         successSeasons(mySeasons)
    //     })
    // }

    function fetchShow(showId, successSeasons) {
        const urlSingleShow = ` http://api.tvmaze.com/shows/${showId}?embed[]=seasons&embed[]=cast`

        $.get(urlSingleShow, function (apiShow) {
            // Cast
            const cast = []
            const apiCast = apiShow._embedded.cast;

            for (let i = 0; i < apiCast.length; i++) {
                const person = apiCast[i].person;
                cast.push(new Cast(person.name));
            }

            //Seasons
            const mySeasons = []
            const apiSeasons = apiShow._embedded.seasons;

            for (let i = 0; i < apiSeasons.length; i++) {
                const apiSeason = apiSeasons[i];

                const season = new Season(apiSeason.id, apiSeason.premiereDate, apiSeason.endDate)
                mySeasons.push(season)

            }

            const show = new Show(apiShow.name, apiShow.image.medium, apiShow.url, apiShow.rating.average, apiShow.id, mySeasons, cast);

            successSeasons(show)
        })
    }

    return {
        fetchShows,
        fetchShow
    }

})();