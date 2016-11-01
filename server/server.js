var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 5678;
var router = express.Router();

var pokemons = [
    {
      "number": "004",
      "name": "Charmander",
      "type": "Fire"
    },
    {
      "number": "025",
      "name": "Pickachu",
      "type": "Electric"
    }
];

router.get('/', function(req, res) {
    res.json({ message: 'Pokedex' });
});

router.route('/pokemons')

    .get(function(req, res) {
        res.json({
            "pokemons": pokemons
        });
    })

    .post(function(req, res) {
        var pokemon = {};
        pokemon.number = req.body.number;
        pokemon.name = req.body.name;
        pokemon.type = req.body.type;
        pokemons.push(pokemon);
        res.json({ message: 'Pokemon created!' });
    });


app.use('/pokedex', router);
app.listen(port);

console.log('Listening on port ' + port);
