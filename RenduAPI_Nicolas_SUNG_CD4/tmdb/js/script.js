document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "a3906c9bdd5a2532c87f7eb54d323e4e";

    let currentPage = 1;
    function fetchFilms (){
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=fr-FR&page=${currentPage}`)
            .then (reponse => reponse.json())
            .then (data => displayFilms(data.results))
            .catch (error => console.log(error))
    };

    function displayFilms (films) {
        const container = document.getElementById("films-container");
        const template = document.getElementById("film-template");

        container.innerHTML = "";
        container.appendChild(template);

        films.forEach((film) => {
            const filmCard = template.cloneNode(true);
            filmCard.id = "";
            filmCard.style.display = "block" ;
            filmCard.querySelector('.film-title').textContent = film.title
            filmCard.querySelector('.film-description').textContent = film.overview
            filmCard.querySelector('.film-details-link').href = `details.html?id=${film.id}`
            container.appendChild(filmCard)
        });
    }

    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");
    const currentPageSpan = document.getElementById("current-page");

    prevBtn.addEventListener('click',() => {
        if (currentPage > 1){
            currentPage--;
            currentPageSpan.textContent = currentPage;
            fetchFilms() 
        }
    })

    nextBtn.addEventListener('click',() => {
        if (currentPage <= 1){
            currentPage++;
            currentPageSpan.textContent = currentPage;
            fetchFilms()
        }
    })
    
    fetchFilms()

})