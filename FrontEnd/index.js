function acceptPokemon(){
   console.log("hello"); 
    $.ajax({
        url:'http://localhost:5678/pokemon',
        contentType: 'application/json; charser=UTF-8',
        type: 'POST',
        data: JSON.stringify({'test':'test'})
    }).done(function(data){
        console.log("done");
    });
}

function acceptPokemon(){
   console.log("hello"); 
    $.ajax({
        url:'http://localhost:5678',
        contentType: 'application/json; charser=UTF-8',
        type: 'GET',
        data: JSON.stringify({'test':'test'})
    }).done(function(data){
        console.log("done");
    });
}

