# Exercice PokéApi

Tout ce qui se passe ici sera dans votre fichier `script.js`. Créez deux fonctions :

## Étape 1 :

fetchPokemon qui prendra en paramètre le nom du Pokémon (type string). Cette fonction devra être une fonction déclarative.
displayPokemon qui prendra en paramètre les détails du Pokémon (au format JSON). Cette fonction devra être une fonction fléchée.

## Étape 2 :

- Créez une variable form pour récupérer le formulaire (par son id).
- Créez une variable select pour récupérer le sélecteur (par son id).
- Appelez par défaut, lors de l'exécution du fichier JS (au chargement de la page), la fonction fetchPokemon avec le Pokémon de votre choix (par exemple : pikachu).

- Lors de l'envoi du formulaire (ajoutez un écouteur d'événement, consultez les exemples JavaScript), appelez event.preventDefault() pour empêcher le formulaire de recharger la page (event qui est un paramètre du callback de l'écouteur d'événement).
  Ensuite, récupérez le nom du Pokémon choisi via la variable select créée juste avant (select.value).

- Appelez la fonction fetchPokemon avec le nom du Pokémon choisi.

## Étape 3 :

URL : https://pokeapi.co/api/v2/pokemon/{POKEMON}
Exemple d'URL : https://pokeapi.co/api/v2/pokemon/pikachu

- Dans votre Postman, faites une nouvelle requête HTTP en GET pour récupérer les informations d'un Pokémon afin d'avoir un aperçu du résultat.

- Dans votre fonction fetchPokemon, utilisez fetch pour récupérer les informations d'un Pokémon et renvoyez les données au format JSON.

Une fois les données au format JSON récupérées, appelez votre fonction `displayPokemon`.

## Étape 4 :

Dans votre fonction displayPokemon, affichez :

- Le nom du Pokémon dans la balise qui a pour id pokemon-name.
- L'image du Pokémon dans la balise qui a pour id pokemon-image.
- Le(s) type(s) du Pokémon dans la balise qui a pour id pokemon-type.
- Le poids du Pokémon dans la balise qui a pour id pokemon-weight.
- La taille du Pokémon dans la balise qui a pour id pokemon-height.
- Les capacités du Pokémon, suivies d'une virgule (utilisez les fonctions JavaScript map et join), dans la balise qui a pour id pokemon-abilities.
