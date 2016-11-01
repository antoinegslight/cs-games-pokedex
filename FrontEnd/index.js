function acceptPokemon(){
   console.log("hello"); 
    $.ajax({
        url:'http://localhost:5678/pokemon',
        contentType: 'application/json; charser=UTF-8',
        type: 'POST',
        data: JSON.stringify({'test':'test'})
    }).done(function(data){
        console.log("hello");
        console.log(data);
        var name =data.body.name;
        var type = data.body.type;
        var number = data.body.number;
    });
}

function acceptPokemon(){
   console.log("hello"); 
    $.ajax({
        url:'http://localhost:5678/pokedex/pokemons',
        contentType: 'application/json; charser=UTF-8',
        type: 'GET'
    }).done(function(data){
        console.log("hello");
        console.log(data);
        for(pokemon in data.body.pokemons){
            var name = pokemon.name;
            var type = pokemon.type;
            var number = pokemon.number;
            renderPokemon(name,"http://assets.pokemon.com/assets/cms2/img/pokedex/full//025.png",type, number);     
        }
        var name =data.body.name;
        var type = data.body.type;
        var number = data.body.number;
    });
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
acceptPokemon();
