const result = document.querySelector('.result')
const btn = document.querySelector('#submit')
// nombre de pokemon qu'on veut afficher
let nbPokemon = 30

for (let i = 1; i <= nbPokemon; i++) {
    let div = document.createElement('div')
    div.classList.add('pokemon')
    fetch("https://pokeapi.co/api/v2/pokemon/" + i + "")
        .then((Response) => Response.json())
        .then((pokemon) => {
            // console.log(pokemon.id)
            // pour afficher les 0 devant le id 
            div.innerHTML += ("00" + pokemon.id).slice(-3)
            div.innerHTML += "<br>" + pokemon.name + "<br><p>" + pokemon.types[0].type.name + "</p>"
            // declarer array pour stocker les couleurs par apport au type de pokemon
            let colors = { 'bug': '#00312B', 'water': '#03D9F4', 'fire': '#D95204', 'electric': '#749B78', 'grass': '#E3C998', 'fighting': 'red', 'ground': '#97A677', 'normal': '#FF6969', 'poison': '#7A2544' }
            div.style.backgroundColor = colors[pokemon.types[0].type.name];
            let img = document.createElement("img");
            img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png"
            div.appendChild(img)
        })

    result.appendChild(div)
}
