const result = document.querySelector('.result')
const btn = document.querySelector('#submit')
// nombre de pokemon qu'on veut afficher
let nbPokemon = 30

for (let i = 1; i <= nbPokemon; i++) {
    let div = document.createElement('div')
    let pokemonIcon = document.createElement('span')
    pokemonIcon.classList.add('icon')


    div.classList.add('pokemon')
    fetch("https://pokeapi.co/api/v2/pokemon/" + i + "")
        .then((Response) => Response.json())
        .then((pokemon) => {
            // console.log(pokemon.id)
            // pour afficher les 0 devant le id 
            div.innerHTML += "<p class='id'>" + ("00" + pokemon.id).slice(-3) + '</p>'
            div.innerHTML += pokemon.name + "<br><p>" + pokemon.types[0].type.name + "</p>"
            // declarer array pour stocker les couleurs par apport au type de pokemon
            let colors = {
                bug: ['#00312B', { iconType: '<i class="fa-solid fa-bug"></i>', iconColor: 'green' }],
                water: ['#03D9F4', { iconType: '<i class="fa-solid fa-droplet"></i>', iconColor: 'blue' }],
                fire: ['#D95204', { iconType: '<i class="fa-solid fa-fire"></i>', iconColor: 'red' }],
                electric: ['#749B78', { iconType: '<i class="fa-solid fa-bolt"></i>', iconColor: 'yellow' }],
                grass: ['#E3C998', { iconType: '<i class="fa-solid fa-tree"></i>', iconColor: 'green' }],
                fighting: ['red', { iconType: '<i class="fa-solid fa-fire"></i>' }],
                ground: ['#97A677', { iconType: '<i class="fa-solid fa-diamond"></i>' }],
                normal: ['#FF6969', { iconType: '<i class="fa-solid fa-circle"></i>' }],
                poison: ['#7A2544', { iconType: '<i class="fa-solid fa-skull-crossbones"></i>' }]
            }
            div.appendChild(pokemonIcon)
            // changer la couleur du div
            div.style.backgroundColor = colors[pokemon.types[0].type.name][0];
            // mettre l'icone dans la balise span pour afficher l'icon en html
            pokemonIcon.innerHTML += colors[pokemon.types[0].type.name][1].iconType
            pokemonIcon.style.color = colors[pokemon.types[0].type.name][1].iconColor
            // console.log(colors[pokemon.types[0].type.name][1].iconType)
            let img = document.createElement("img");
            img.src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + i + ".png"
            div.appendChild(img)

        })

    result.appendChild(div)
}
