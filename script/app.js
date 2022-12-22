const getData = (endpoint) => {
return fetch(endpoint)
  .then((r) => r.json())
  .catch((e) => console.error(e));
};

let getAPI = async (lat, lon) => {

const link = `https://pokeapi.co/api/v2/pokemon/`;

const Pokemon = await getData(link);
showPokemons(Pokemon.results);
};

let showPokemons = function (pokemon) {
  let pokehtml = '';
  for (let poke of pokemon) {
    const name = poke.name;
    console.log(name);
    console.log(poke.url);

    pokehtml += `
    <div class="c-vak c-gallery-image js-image" >
      <div class="c-info">
        <img  src="" alt="" class="c-image" >
        <p class="c-names">${poke.name}</p>
      </div>
    </div>`;
  }
  document.querySelector('.js-pokemon').innerHTML = pokehtml;
};

document.addEventListener('DOMContentLoaded', function () {
  getAPI();
});