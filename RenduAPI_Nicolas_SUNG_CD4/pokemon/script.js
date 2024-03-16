document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById('pokemon-form');
    const select = document.getElementById('pokemon-select');

    function fetchPokemon(pokemonName) {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then(response => response.json())
            .then(data => displayPokemon(data))
            .catch(error => console.log(error));
    }

   
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const pokemonName = select.value;
        fetchPokemon(pokemonName);
    })

    function displayPokemon (pokemonDetails) {
        document.getElementById('pokemon-name').textContent = pokemonDetails.name;
        document.getElementById('pokemon-image').src = pokemonDetails.sprites.front_default;
        document.getElementById('pokemon-type').textContent = pokemonDetails.types.map(type => type.type.name).join(', ');
        document.getElementById('pokemon-weight').textContent = pokemonDetails.weight;
        document.getElementById('pokemon-height').textContent = pokemonDetails.height;
        document.getElementById('pokemon-abilities').textContent = pokemonDetails.abilities.map(ability => ability.ability.name).join(', ');
    }
    fetchPokemon("pikachu");

})