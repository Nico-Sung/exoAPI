document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "a3906c9bdd5a2532c87f7eb54d323e4e";

    const param1 = new URLSearchParams(window.location.search);
    const filmId = param1.get("id");
    console.log(filmId);
 

    function fetchFilm(id) {
        fetch (`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=fr-FR`)
        .then (reponse => reponse.json())
        .then (data => displayFilm(data))
        .catch (error => console.log(error))
    };

    function displayFilm(film){
        const container = document.getElementById("film-details");
        container.querySelector(".film-title").textContent = film.title;
        container.querySelector(".film-description").textContent = film.overview;
    }
    fetchFilm(filmId);
})