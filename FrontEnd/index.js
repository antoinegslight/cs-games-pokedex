function acceptPokemon(){
   console.log("hello"); 
    var inputName = document.getElementById('inputName').value;
    var inputType= document.getElementById('inputType').value;
    var inputNumber = document.getElementById('inputNumber').value;
    var inputImage = document.getElementById('inputImage').value;
    var pokemon = {}
    pokemon.name = inputName;
    pokemon.type = inputType;
    pokemon.number = inputNumber;
    pokemon.image = inputImage;
    console.log(pokemon);
    $.ajax({
        url:'http://localhost:5678/pokedex/pokemons',
        contentType: 'application/json; charser=UTF-8',
        type: 'POST',
        data: JSON.stringify(pokemon)
    }).done(function(data){
        console.log(data);
        addPokemon(pokemon);
        refresh();
    });
}
function refresh(){
    var allPokemons = document.getElementById('AllPokemons');
    while(allPokemons.hasChildNodes()){
        allPokemons.removeChild(allPokemons.lastChild);
    }
    getAllPokemon();
}


function getAllPokemon(){
   console.log("hello"); 
    $.ajax({
        url:'http://localhost:5678/pokedex/pokemons',
        contentType: 'application/json; charser=UTF-8',
        type: 'GET'
    }).done(function(data){
        console.log("hello");
        console.log(data);
         for(i = 0; i < data.pokemons.length; i++){
            var pokemon = data.pokemons[i];
            addPokemon(pokemon);
            //var name = pokemon.name;
            //var type = pokemon.type;
            //var number = pokemon.number;
            //var image = "http://assets.pokemon.com/assets/cms2/img/pokedex/full//025.png";
            //renderPokemon(name,image,type, number);     
        }
    });
}

function addPokemon(pokemon){
    var name = pokemon.name;
    var type = pokemon.type;
    var number = pokemon.number;
    var image = "http://assets.pokemon.com/assets/cms2/img/pokedex/full//025.png";
    renderPokemon(name,image,type, number);
}

function renderPokemon(name, imageUrl, type, number){
    var allPokemons = document.getElementById('AllPokemons');
    var image = document.createElement('img');    
    image.src = imageUrl;

    var title = document.createElement('h2');
    var text = document.createTextNode(name);
    title.appendChild(text);

    var pokeType = document.createElement('h3');
    var textPokeType = document.createTextNode(type);
    pokeType.appendChild(textPokeType);

    var numberType = document.createElement('h3');
    var numberText = document.createTextNode(number);
    numberType.appendChild(numberText);

    var container = document.createElement('div');
    console.log(container);
    container.appendChild(title);
    container.appendChild(image);
    container.appendChild(numberType);
    container.appendChild(pokeType);
    allPokemons.appendChild(container);
}

//renderPokemon("Pikachu", "http://assets.pokemon.com/assets/cms2/img/pokedex/full//025.png", "electric", 25);
getAllPokemon();
